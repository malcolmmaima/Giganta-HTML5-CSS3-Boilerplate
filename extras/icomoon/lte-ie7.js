/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-chat' : '&#x22;',
			'icon-chat-alt-fill' : '&#x24;',
			'icon-comment-alt1-fill' : '&#x26;',
			'icon-comment-fill' : '&#x28;',
			'icon-comment-alt2-stroke' : '&#x29;',
			'icon-comment-alt2-fill' : '&#x2a;',
			'icon-checkmark' : '&#x2b;',
			'icon-check-alt' : '&#x2c;',
			'icon-x' : '&#x2d;',
			'icon-x-altx-alt' : '&#x2e;',
			'icon-denied' : '&#x2f;',
			'icon-cursor' : '&#x30;',
			'icon-rss' : '&#x31;',
			'icon-rss-alt' : '&#x32;',
			'icon-wrench' : '&#x33;',
			'icon-dial' : '&#x34;',
			'icon-cog' : '&#x35;',
			'icon-calendar' : '&#x36;',
			'icon-calendar-alt-stroke' : '&#x37;',
			'icon-calendar-alt-fill' : '&#x38;',
			'icon-share' : '&#x39;',
			'icon-mail' : '&#x3a;',
			'icon-heart-stroke' : '&#x3b;',
			'icon-heart-fill' : '&#x3c;',
			'icon-movie' : '&#x3d;',
			'icon-document-alt-stroke' : '&#x3e;',
			'icon-document-alt-fill' : '&#x3f;',
			'icon-document-stroke' : '&#x40;',
			'icon-document-fill' : '&#x41;',
			'icon-plus' : '&#x42;',
			'icon-plus-alt' : '&#x43;',
			'icon-minus' : '&#x44;',
			'icon-minus-alt' : '&#x45;',
			'icon-pin' : '&#x46;',
			'icon-link' : '&#x47;',
			'icon-bolt' : '&#x48;',
			'icon-move' : '&#x49;',
			'icon-move-alt1' : '&#x4a;',
			'icon-move-alt2' : '&#x4b;',
			'icon-equalizer' : '&#x4c;',
			'icon-award-fill' : '&#x4d;',
			'icon-award-stroke' : '&#x4e;',
			'icon-magnifying-glass' : '&#x4f;',
			'icon-trash-stroke' : '&#x50;',
			'icon-trash-fill' : '&#x51;',
			'icon-beaker-alt' : '&#x52;',
			'icon-beaker' : '&#x53;',
			'icon-key-stroke' : '&#x54;',
			'icon-key-fill' : '&#x55;',
			'icon-new-window' : '&#x56;',
			'icon-lightbulb' : '&#x57;',
			'icon-spin-alt' : '&#x58;',
			'icon-spin' : '&#x59;',
			'icon-curved-arrow' : '&#x5a;',
			'icon-undo' : '&#x5b;',
			'icon-reload' : '&#x5c;',
			'icon-loop' : '&#x5e;',
			'icon-loop-alt2' : '&#x60;',
			'icon-loop-alt3' : '&#x61;',
			'icon-loop-alt4' : '&#x62;',
			'icon-transfer' : '&#x63;',
			'icon-move-vertical-alt2' : '&#x66;',
			'icon-move-horizontal' : '&#x67;',
			'icon-move-horizontal-alt2' : '&#x69;',
			'icon-arrow-left' : '&#x6a;',
			'icon-arrow-left-alt1' : '&#x6b;',
			'icon-arrow-left-alt2' : '&#x6c;',
			'icon-arrow-right' : '&#x6d;',
			'icon-arrow-right-alt1' : '&#x6e;',
			'icon-arrow-right-alt2' : '&#x6f;',
			'icon-arrow-up' : '&#x70;',
			'icon-arrow-up-alt1' : '&#x71;',
			'icon-arrow-up-alt2' : '&#x72;',
			'icon-arrow-down' : '&#x73;',
			'icon-arrow-down-alt1' : '&#x74;',
			'icon-arrow-down-alt2' : '&#x75;',
			'icon-cd' : '&#x76;',
			'icon-steering-wheel' : '&#x77;',
			'icon-microphone' : '&#x78;',
			'icon-headphones' : '&#x79;',
			'icon-volume' : '&#x7a;',
			'icon-volume-mute' : '&#x7b;',
			'icon-play' : '&#x7c;',
			'icon-pause' : '&#x7d;',
			'icon-stop' : '&#xe000;',
			'icon-eject' : '&#xe001;',
			'icon-first' : '&#xe002;',
			'icon-last' : '&#xe003;',
			'icon-play-alt' : '&#xe004;',
			'icon-fullscreen-alt' : '&#xe008;',
			'icon-iphone' : '&#xe009;',
			'icon-battery-empty' : '&#xe00a;',
			'icon-battery-half' : '&#xe00b;',
			'icon-battery-full' : '&#xe00c;',
			'icon-battery-charging' : '&#xe00d;',
			'icon-compass' : '&#xe00e;',
			'icon-box' : '&#xe00f;',
			'icon-folder-stroke' : '&#xe010;',
			'icon-folder-fill' : '&#xe011;',
			'icon-at' : '&#xe012;',
			'icon-ampersand' : '&#xe013;',
			'icon-info' : '&#xe014;',
			'icon-question-mark' : '&#xe015;',
			'icon-pilcrow' : '&#xe016;',
			'icon-hash' : '&#xe017;',
			'icon-left-quote' : '&#xe018;',
			'icon-right-quote' : '&#xe019;',
			'icon-left-quote-alt' : '&#xe01a;',
			'icon-right-quote-alt' : '&#xe01b;',
			'icon-article' : '&#xe01c;',
			'icon-read-more' : '&#xe01d;',
			'icon-list' : '&#xe01e;',
			'icon-list-nested' : '&#xe01f;',
			'icon-book' : '&#xe020;',
			'icon-book-alt' : '&#xe021;',
			'icon-book-alt2' : '&#xe022;',
			'icon-pen' : '&#xe023;',
			'icon-pen-alt-stroke' : '&#xe024;',
			'icon-pen-alt-fill' : '&#xe025;',
			'icon-pen-alt2' : '&#xe026;',
			'icon-brush' : '&#xe027;',
			'icon-brush-alt' : '&#xe028;',
			'icon-eyedropper' : '&#xe029;',
			'icon-layers-alt' : '&#xe02a;',
			'icon-layers' : '&#xe02b;',
			'icon-image' : '&#xe02c;',
			'icon-camera' : '&#xe02d;',
			'icon-aperture' : '&#xe02e;',
			'icon-aperture-alt' : '&#xe02f;',
			'icon-chart' : '&#xe030;',
			'icon-chart-alt' : '&#xe031;',
			'icon-bars' : '&#xe032;',
			'icon-bars-alt' : '&#xe033;',
			'icon-eye' : '&#xe034;',
			'icon-user' : '&#xe035;',
			'icon-home' : '&#xe036;',
			'icon-clock' : '&#xe037;',
			'icon-lock-stroke' : '&#xe038;',
			'icon-lock-fill' : '&#xe039;',
			'icon-unlock-stroke' : '&#xe03a;',
			'icon-unlock-fill' : '&#xe03b;',
			'icon-tag-stroke' : '&#xe03c;',
			'icon-tag-fill' : '&#xe03d;',
			'icon-sun-stroke' : '&#xe03e;',
			'icon-sun-fill' : '&#xe03f;',
			'icon-moon-stroke' : '&#xe040;',
			'icon-moon-fill' : '&#xe041;',
			'icon-cloud' : '&#xe042;',
			'icon-rain' : '&#xe043;',
			'icon-umbrella' : '&#xe044;',
			'icon-star' : '&#xe045;',
			'icon-map-pin-stroke' : '&#xe046;',
			'icon-map-pin-fill' : '&#xe047;',
			'icon-map-pin-alt' : '&#xe048;',
			'icon-target' : '&#xe049;',
			'icon-download' : '&#xe04a;',
			'icon-upload' : '&#xe04b;',
			'icon-cloud-download' : '&#xe04c;',
			'icon-cloud-upload' : '&#xe04d;',
			'icon-fork' : '&#xe04e;',
			'icon-paperclip' : '&#xe04f;',
			'icon-IcoMoon' : '&#xe050;',
			'icon-safari' : '&#xe051;',
			'icon-opera' : '&#xe052;',
			'icon-IE' : '&#xe053;',
			'icon-firefox' : '&#xe054;',
			'icon-chrome' : '&#xe055;',
			'icon-css3' : '&#xe056;',
			'icon-html5' : '&#xe057;',
			'icon-html5-2' : '&#xe058;',
			'icon-file-css' : '&#xe059;',
			'icon-file-xml' : '&#xe05a;',
			'icon-file-zip' : '&#xe05b;',
			'icon-file-powerpoint' : '&#xe05c;',
			'icon-file-excel' : '&#xe05d;',
			'icon-file-word' : '&#xe05e;',
			'icon-file-openoffice' : '&#xe05f;',
			'icon-file-pdf' : '&#xe060;',
			'icon-libreoffice' : '&#xe061;',
			'icon-xing' : '&#xe062;',
			'icon-pinterest' : '&#xe063;',
			'icon-pinterest-2' : '&#xe064;',
			'icon-stumbleupon' : '&#xe065;',
			'icon-stumbleupon-2' : '&#xe066;',
			'icon-delicious' : '&#xe067;',
			'icon-lastfm' : '&#xe068;',
			'icon-lastfm-2' : '&#xe069;',
			'icon-linkedin' : '&#xe06a;',
			'icon-reddit' : '&#xe06b;',
			'icon-skype' : '&#xe06c;',
			'icon-soundcloud' : '&#xe06d;',
			'icon-soundcloud-2' : '&#xe06e;',
			'icon-windows' : '&#xe06f;',
			'icon-android' : '&#xe070;',
			'icon-finder' : '&#xe071;',
			'icon-apple' : '&#xe072;',
			'icon-amazon' : '&#xe073;',
			'icon-amazon-2' : '&#xe074;',
			'icon-yahoo' : '&#xe075;',
			'icon-yahoo-2' : '&#xe076;',
			'icon-tumblr' : '&#xe077;',
			'icon-tumblr-2' : '&#xe078;',
			'icon-blogger' : '&#xe079;',
			'icon-blogger-2' : '&#xe07a;',
			'icon-wordpress' : '&#xe07b;',
			'icon-wordpress-2' : '&#xe07c;',
			'icon-github' : '&#xe07d;',
			'icon-git' : '&#xe07e;',
			'icon-github-2' : '&#xe07f;',
			'icon-github-3' : '&#xe080;',
			'icon-github-4' : '&#xe081;',
			'icon-github-5' : '&#xe082;',
			'icon-github-6' : '&#xe083;',
			'icon-github-7' : '&#xe084;',
			'icon-deviantart' : '&#xe085;',
			'icon-deviantart-2' : '&#xe086;',
			'icon-forrst' : '&#xe087;',
			'icon-forrst-2' : '&#xe088;',
			'icon-dribbble' : '&#xe089;',
			'icon-dribbble-2' : '&#xe08a;',
			'icon-dribbble-3' : '&#xe08b;',
			'icon-picassa' : '&#xe08c;',
			'icon-picassa-2' : '&#xe08d;',
			'icon-flickr' : '&#xe08e;',
			'icon-flickr-2' : '&#xe08f;',
			'icon-flickr-3' : '&#xe090;',
			'icon-vimeo' : '&#xe091;',
			'icon-vimeo-2' : '&#xe092;',
			'icon-youtube' : '&#xe093;',
			'icon-youtube-2' : '&#xe094;',
			'icon-feed' : '&#xe095;',
			'icon-feed-2' : '&#xe096;',
			'icon-feed-3' : '&#xe097;',
			'icon-twitter' : '&#xe098;',
			'icon-twitter-2' : '&#xe099;',
			'icon-twitter-3' : '&#xe09a;',
			'icon-facebook' : '&#xe09b;',
			'icon-facebook-2' : '&#xe09c;',
			'icon-facebook-3' : '&#xe09d;',
			'icon-facebook-4' : '&#xe09e;',
			'icon-gplus' : '&#xe09f;',
			'icon-google-plus' : '&#xe0a0;',
			'icon-google-plus-2' : '&#xe0a1;',
			'icon-google-plus-3' : '&#xe0a2;',
			'icon-home-2' : '&#xe0a3;',
			'icon-list-2' : '&#xe0a4;',
			'icon-book-2' : '&#xe0a5;',
			'icon-pencil' : '&#xe0a6;',
			'icon-bookmark' : '&#xe0a7;',
			'icon-pointer' : '&#xe0a8;',
			'icon-cloud-2' : '&#xe0a9;',
			'icon-cloud-ul' : '&#xe0aa;',
			'icon-cloud-dl' : '&#xe0ab;',
			'icon-search' : '&#xe0ac;',
			'icon-folder' : '&#xe0ad;',
			'icon-trashcan' : '&#xe0ae;',
			'icon-droplet' : '&#xe0af;',
			'icon-tag' : '&#xe0b0;',
			'icon-moon' : '&#xe0b1;',
			'icon-eye-2' : '&#xe0b2;',
			'icon-target-2' : '&#xe0b3;',
			'icon-blocked' : '&#xe0b4;',
			'icon-switch' : '&#xe0b5;',
			'icon-goal' : '&#xe0b6;',
			'icon-location' : '&#xe0b7;',
			'icon-close' : '&#xe0b8;',
			'icon-checkmark-2' : '&#xe0b9;',
			'icon-munis' : '&#xe0ba;',
			'icon-plus-2' : '&#xe0bb;',
			'icon-close-2' : '&#xe0bc;',
			'icon-divide' : '&#xe0bd;',
			'icon-minus-2' : '&#xe0be;',
			'icon-plus-3' : '&#xe0bf;',
			'icon-equals' : '&#xe0c0;',
			'icon-cancel' : '&#xe0c1;',
			'icon-minus-3' : '&#xe0c2;',
			'icon-checkmark-3' : '&#xe0c3;',
			'icon-equals-2' : '&#xe0c4;',
			'icon-asterisk' : '&#xe0c5;',
			'icon-mobile' : '&#xe0c6;',
			'icon-tablet' : '&#xe0c7;',
			'icon-phone' : '&#xe0c8;',
			'icon-bars-2' : '&#xe0c9;',
			'icon-stack' : '&#xe0ca;',
			'icon-battery' : '&#xe0cb;',
			'icon-battery-2' : '&#xe0cc;',
			'icon-battery-3' : '&#xe0cd;',
			'icon-calculator' : '&#xe0ce;',
			'icon-bolt-2' : '&#xe0cf;',
			'icon-list-3' : '&#xe0d0;',
			'icon-grid' : '&#xe0d1;',
			'icon-list-4' : '&#xe0d2;',
			'icon-list-5' : '&#xe0d3;',
			'icon-layout' : '&#xe0d4;',
			'icon-equalizer-2' : '&#xe0d5;',
			'icon-equalizer-3' : '&#xe0d6;',
			'icon-window' : '&#xe0d7;',
			'icon-window-2' : '&#xe0d8;',
			'icon-window-3' : '&#xe0d9;',
			'icon-window-4' : '&#xe0da;',
			'icon-locked' : '&#xe0db;',
			'icon-unlocked' : '&#xe0dc;',
			'icon-shield' : '&#xe0dd;',
			'icon-cart' : '&#xe0de;',
			'icon-console' : '&#xe0df;',
			'icon-office' : '&#xe0e0;',
			'icon-basket' : '&#xe0e1;',
			'icon-suitcase' : '&#xe0e2;',
			'icon-airplane' : '&#xe0e3;',
			'icon-file-download' : '&#xe0e4;',
			'icon-file-upload' : '&#xe0e5;',
			'icon-file' : '&#xe0e6;',
			'icon-file-add' : '&#xe0e7;',
			'icon-file-remove' : '&#xe0e8;',
			'icon-bars-3' : '&#xe0e9;',
			'icon-chart-2' : '&#xe0ea;',
			'icon-stats' : '&#xe0eb;',
			'icon-arrow-right-2' : '&#xe0ec;',
			'icon-arrow-left-2' : '&#xe0ed;',
			'icon-arrow-down-2' : '&#xe0ee;',
			'icon-arrow-up-2' : '&#xe0ef;',
			'icon-arrow-right-3' : '&#xe0f0;',
			'icon-arrow-left-3' : '&#xe0f1;',
			'icon-arrow-up-3' : '&#xe0f2;',
			'icon-arrow-down-3' : '&#xe0f3;',
			'icon-arrow-down-left' : '&#xe0f4;',
			'icon-arrow-down-right' : '&#xe0f5;',
			'icon-arrow-up-left' : '&#xe0f6;',
			'icon-arrow-up-right' : '&#xe0f7;',
			'icon-arrow-left-4' : '&#xe0f8;',
			'icon-arrow-right-4' : '&#xe0f9;',
			'icon-arrow-down-4' : '&#xe0fa;',
			'icon-arrow-up-4' : '&#xe0fb;',
			'icon-move-2' : '&#xe0fc;',
			'icon-movie-2' : '&#xe0fd;',
			'icon-refresh' : '&#xe0fe;',
			'icon-picture' : '&#xe0ff;',
			'icon-music' : '&#xe100;',
			'icon-disk' : '&#xe101;',
			'icon-camera-2' : '&#xe102;',
			'icon-film' : '&#xe103;',
			'icon-tablet-2' : '&#xe104;',
			'icon-ipod' : '&#xe105;',
			'icon-camera-3' : '&#xe106;',
			'icon-mouse' : '&#xe107;',
			'icon-volume-2' : '&#xe108;',
			'icon-monitor' : '&#xe109;',
			'icon-thumbs-up' : '&#xe10a;',
			'icon-thumbs-down' : '&#xe10b;',
			'icon-neutral' : '&#xe10c;',
			'icon-grin' : '&#xe10d;',
			'icon-heart' : '&#xe10e;',
			'icon-pacman' : '&#xe10f;',
			'icon-star-2' : '&#xe110;',
			'icon-star-3' : '&#xe111;',
			'icon-envelope' : '&#xe112;',
			'icon-comment' : '&#xe113;',
			'icon-comment-2' : '&#xe114;',
			'icon-user-2' : '&#xe115;',
			'icon-download-2' : '&#xe116;',
			'icon-upload-2' : '&#xe117;',
			'icon-inbox' : '&#xe118;',
			'icon-partial' : '&#xe119;',
			'icon-unchecked' : '&#xe11a;',
			'icon-checked' : '&#xe11b;',
			'icon-circles' : '&#xe11c;',
			'icon-pencil-2' : '&#xe11d;',
			'icon-flag' : '&#xe11e;',
			'icon-link-2' : '&#xe11f;',
			'icon-stop-2' : '&#xe120;',
			'icon-play-2' : '&#xe121;',
			'icon-pause-2' : '&#xe122;',
			'icon-next' : '&#xe123;',
			'icon-previous' : '&#xe124;',
			'icon-drink' : '&#xe125;',
			'icon-drink-2' : '&#xe126;',
			'icon-hamburger' : '&#xe127;',
			'icon-mug' : '&#xe128;',
			'icon-calendar-2' : '&#xe129;',
			'icon-clock-2' : '&#xe12a;',
			'icon-calendar-3' : '&#xe12b;',
			'icon-compass-2' : '&#xe12c;',
			'icon-screen' : '&#xe12d;',
			'icon-keyboard' : '&#xe12e;',
			'icon-quote' : '&#xe12f;',
			'icon-move-vertical' : '&#x64;',
			'icon-fullscreen' : '&#xe007;',
			'icon-plus-4' : '&#xe005;',
			'icon-cancel-2' : '&#xe006;',
			'icon-code' : '&#xe130;',
			'icon-winsows' : '&#xe131;',
			'icon-database' : '&#xe132;',
			'icon-volume-3' : '&#xe133;',
			'icon-volume-4' : '&#xe134;',
			'icon-headphones-2' : '&#xe135;',
			'icon-move-3' : '&#xe136;',
			'icon-checkbox-checked' : '&#xe137;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^s'"]+/);
		if (c) {
			addIcon(el, icons[c[0]]);
		}
	}
};