function listener(event) {
  if(typeof event.data != "string")
    return;
  if (event.data) {
    
    if(event.data.charAt(0) != "{")
      return;

    var message = JSON.parse(event.data);  
    
    var iframe = document.querySelector('iframe[src="' + message.frameSrc + '"]');
    if (!iframe) return;

    if (message.type === 'resize') {
      iframe.style.height = message.data + 10 + 'px';
    }

    if (message.type === 'scroll_to') {
      var iframeOffset = iframe.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: iframeOffset + message.data,
        behavior: 'smooth'
      });
    }

    if (message.type === 'link_to') {
      if (message.data.blank) {
        window.open(message.data.link);
      } else {
        window.location.href = message.data.link;
      }
    }

    if (message.type === 'get_metrix') {
      var send_metrix = function send_metrix() {
        var message = {
          type: 'metrix',
          data: {
            scrollTop: window.pageYOffset,
            windowHeight: window.innerHeight,
            frameOffset: iframe.getBoundingClientRect().top + window.pageYOffset
          }
        };
        iframe.contentWindow.postMessage(JSON.stringify(message), '*');
      };

      send_metrix();
      window.addEventListener('scroll', function () {
        send_metrix();
      });
    }
  }
}

if (window.addEventListener) {
  window.addEventListener("message", listener);
} else {
  window.attachEvent("onmessage", listener);
}

function pm(message) {
  window.parent.postMessage(JSON.stringify(message), '*');
}