function safeEncode(src) {
  try {
    return encodeURI(src);
  } catch (e) {
    return src;
  }
}

function setPreviewButtonsState(isOpen) {
  $('.preview-btn').attr('aria-expanded', isOpen ? 'true' : 'false');
}

function openPreview(src) {
  var modal = $('#preview-modal');
  var frame = $('#preview-frame');
  var openNew = $('#open-new');
  var encoded = safeEncode(src);
  openNew.attr('href', encoded);
  frame.attr('src', encoded);
  modal.attr('aria-hidden', 'false');
  modal.addClass('is-open');
  setPreviewButtonsState(true);
}

function closePreview() {
  var modal = $('#preview-modal');
  var frame = $('#preview-frame');
  frame.attr('src', 'about:blank');
  modal.attr('aria-hidden', 'true');
  modal.removeClass('is-open');
  setPreviewButtonsState(false);
}

function initPreviewButtons() {
  $('.preview-btn').click(function(event) {
    event.preventDefault();
    var src = $(this).data('src');
    if (!src) return;
    openPreview(src);
  });

  $('.preview-close').click(function() {
    closePreview();
  });

  $('#preview-modal').click(function(event) {
    if (event.target === this) {
      closePreview();
    }
  });

  $(document).keydown(function(event) {
    if (event.key === 'Escape') closePreview();
  });
}

function initCardHover() {
  $('.project-card').hover(
    function() {
      $(this).css({
        'transform': 'translateY(-8px)',
        'box-shadow': '0 25px 50px rgba(31,61,43,0.12)'
      });
    },
    function() {
      $(this).css({
        'transform': 'translateY(0)',
        'box-shadow': '0 10px 30px rgba(0,0,0,0.03)'
      });
    }
  );
}

function initIframeResize() {
  function resizeFrame() {
    var height = Math.max($(window).height() * 0.72, 300);
    $('#preview-frame').css('height', height + 'px');
  }
  $(window).resize(resizeFrame);
  resizeFrame();
}

function handleContactFormSubmit(event) {
  event.preventDefault();

  var contactMethod = $('input[name="contact-method"]:checked');
  if (!contactMethod.length) {
    alert('Please select Gmail or Outlook to contact me');
    return;
  }

  var userName = $('#name').val().trim();
  var userEmail = $('#email').val().trim();
  var inquiryType = $('#inquiry').val();

  if (!userName || !userEmail) {
    alert('Please enter your name and email address');
    return;
  }

  var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  if (!emailPattern.test(userEmail)) {
    alert('Please enter a valid email address');
    return;
  }

  var subject = 'Contact Form Submission - ' + inquiryType;
  var body = buildEmailBody({ name: userName, email: userEmail });
  var mailtoRecipient = 's221519769@mandela.ac.za';
  var gmailRecipients = '4052144@myuwc.ac.za,lundibuswana@gmail.com';

  if (contactMethod.val() === 'gmail') {
    var gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(gmailRecipients) +
      '&su=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
    window.open(gmailUrl, '_blank');
  } else if (contactMethod.val() === 'outlook') {
    var mailtoUrl = 'mailto:' + encodeURIComponent(mailtoRecipient) +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
    window.location.href = mailtoUrl;
  }
}

function buildEmailBody(formData) {
  var inquiry = $('#inquiry').val();
  var body = 'From: ' + formData.name + '\nEmail: ' + formData.email + '\n\n';

  if (inquiry === 'job-offer') {
    body += 'Inquiry Type: Job Offer\n';
    var interviewDate = $('#interview-date').val() || 'Not specified';
    var interviewTime = $('#interview-time').val() || 'Not specified';
    var requirements = $('#job-requirements').val() || 'None';
    body += 'Preferred Interview Date: ' + interviewDate + '\n';
    body += 'Preferred Interview Time: ' + interviewTime + '\n';
    body += 'Other Requirements: ' + requirements;
  } else if (inquiry === 'general') {
    body += 'Inquiry Type: General Inquiry\n\n';
    var message = $('#inquiry-message').val() || 'No message provided';
    body += 'Message: ' + message;
  }

  return body;
}

function initContactForm() {
  var inquirySelect = $('#inquiry');
  var jobOfferSection = $('#job-offer-section');
  var generalInquirySection = $('#general-inquiry-section');
  var contactForm = $('#contact-form');

  if (!inquirySelect.length) return;

  function updateInquirySections() {
    var selectedValue = inquirySelect.val();
    jobOfferSection.toggle(selectedValue === 'job-offer');
    generalInquirySection.toggle(selectedValue === 'general');
  }

  inquirySelect.change(updateInquirySections);
  contactForm.submit(handleContactFormSubmit);
}

function initProfileBadgeHint() {
  var badge = $('.profile-badge');
  var badgeImg = badge.find('img');
  if (!badge.length || !badgeImg.length) return;

  var badgeClicked = sessionStorage.getItem('profileBadgeClicked');
  
  // Set initial image based on click state
  if (badgeClicked) {
    badgeImg.attr('src', 'images/UWC_Degree..png');
    badgeImg.attr('alt', 'UWC Degree Certificate');
  } else {
    badgeImg.attr('src', 'images/Profile.png');
    badgeImg.attr('alt', 'My Face - Click to view certificate');
  }
  
  // Always show the hint
  badge.addClass('show-hint');

  badge.click(function(event) {
    event.preventDefault();
    badgeImg.attr('src', 'images/UWC_Degree..png');
    badgeImg.attr('alt', 'UWC Degree Certificate');
    sessionStorage.setItem('profileBadgeClicked', 'true');
    window.open('images/UWC_Degree_Certificate.pdf', '_blank');
  });
}

function initHeroAnimation() {
  // Fade in hero section on page load
  $('.hero').hide().fadeIn(800);
}

function initTimelineAnimation() {
  // Animate timeline items sliding in with staggered delay
  $('.timeline-item').each(function(index) {
    $(this).hide().delay(index * 150).slideDown(600);
  });
}

function initPortfolio() {
  initHeroAnimation();
  initTimelineAnimation();
  initPreviewButtons();
  initCardHover();
  initIframeResize();
  initContactForm();
  initProfileBadgeHint();
}

$(document).ready(function() {
  initPortfolio();
});
