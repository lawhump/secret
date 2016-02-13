'use strict';

var $first = $('.first');
var $second = $('.second');
var $third = $('.third');
var $fourth = $('.fourth');
var $fifth = $('.fifth');
var $sixth = $('.sixth');
var $seventh = $('.seventh');

function removeOverlay() {
  $seventh.addClass('hidden');
  $seventh.fadeOut();
  $('.overlay').fadeOut();
}

function showSeventh() {
  $sixth.fadeOut();
  $sixth.addClass( 'hidden' );
  $seventh.removeClass( 'hidden' );
  $seventh.fadeIn();

  setTimeout(function() {
    removeOverlay();
  }, 3000);
}

function showSixth() {
  $fifth.fadeOut();
  $fifth.addClass( 'hidden' );
  $sixth.removeClass( 'hidden' );
  $sixth.fadeIn();

  setTimeout(function() {
    showSeventh();
  }, 3000);
}

function showFifth() {
  $fourth.fadeOut();
  $fourth.addClass( 'hidden' );
  $fifth.removeClass( 'hidden' );
  $fifth.fadeIn();

  setTimeout(function() {
    showSixth();
  }, 3000);
}

function showFourth() {
  $third.fadeOut();
  $third.addClass( 'hidden' );
  $fourth.removeClass( 'hidden' );
  $fourth.fadeIn();

  setTimeout(function() {
    showFifth();
  }, 3000);
}

function showThird() {
  $second.fadeOut();
  $second.addClass( 'hidden' );
  $third.removeClass( 'hidden' );
  $third.fadeIn();

  setTimeout(function() {
    showFourth();
  }, 3000);
}

function showSecond() {
  $first.fadeOut();
  $first.addClass( 'hidden' );
  $second.removeClass( 'hidden' );
  $second.fadeIn();

  setTimeout(function() {
    showThird();
  }, 6000);
}

$(document).ready(function() {
  setTimeout(function() {
    showSecond();
  }, 3000);
});
