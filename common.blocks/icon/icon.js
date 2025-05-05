modules.define("icon", ["i-bem-dom"], function (provide, bemDom) {
  provide(
    bemDom.declBlock(this.name, {
      onSetMod: {
        js: {
          inited: function () {}
        }
      }
    })
  );
});
document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".icon");
  for (let i = 0; i < icons.length; i += 1) {
    const iconType = icons[i].dataset.icon;
    switch (iconType) {
      case "cart":
        icons[i].innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0961 5.64139H4.89478L4.63909 2.81606C4.59727 2.35403 4.20687 2 3.7392 2H1.9035C1.40451 2 1 2.40122 1 2.89616C1 3.39109 1.40451 3.79232 1.9035 3.79232H2.91319C3.46497 9.8897 2.0389 -5.86977 3.95234 15.2755C4.02609 16.1031 4.47693 17.0012 5.2536 17.6114C3.8533 19.3851 5.13275 22 7.41056 22C9.30112 22 10.6346 20.1298 9.98623 18.3584H14.9312C14.2837 20.1275 15.6143 22 17.5069 22C19.0173 22 20.2461 20.7812 20.2461 19.2831C20.2461 17.7849 19.0173 16.5661 17.5069 16.5661H7.41667C6.73035 16.5661 6.13228 16.1554 5.87413 15.557L20.3133 14.7153C20.7075 14.6924 21.041 14.4181 21.1368 14.0381L22.9726 6.75489C23.115 6.19014 22.684 5.64139 22.0961 5.64139ZM7.41056 20.2077C6.8966 20.2077 6.4784 19.7929 6.4784 19.2831C6.4784 18.7732 6.8966 18.3584 7.41056 18.3584C7.92457 18.3584 8.34276 18.7732 8.34276 19.2831C8.34276 19.7929 7.92457 20.2077 7.41056 20.2077ZM17.5068 20.2077C16.9928 20.2077 16.5746 19.7929 16.5746 19.2831C16.5746 18.7732 16.9928 18.3584 17.5068 18.3584C18.0209 18.3584 18.439 18.7732 18.439 19.2831C18.439 19.7929 18.0209 20.2077 17.5068 20.2077ZM19.5447 12.9648L5.63092 13.7758L5.05698 7.43367H20.9389L19.5447 12.9648Z" fill="currentColor"/>
        </svg>`;
        break;
      case "arrow":
        icons[i].innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 6L13 6M13 6L8 1M13 6L8 11" stroke="current-color" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
        break;

      // case 'XXX':
      //     icons[i].innerHTML = `
      //     `;
      //     break;
    }
  }
});
