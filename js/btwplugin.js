window.onload = function() {
  themeDefaultContent = $(
    '#app > .theme-container>.page > .theme-default-content'
  );

  themeDefaultContent.attr('id', 'container');
  btw = new BTWPlugin();
  btw.init({
    id: 'container',
    blogId: '15005-1605711320163-146',
    name: 'King',
    qrcode: 'https://s1.ax1x.com/2023/03/25/ppDCn6P.jpg',
    keyword: '验证码',
  });
};
