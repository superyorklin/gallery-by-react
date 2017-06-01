require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
//获取图片相关的数据
let imageDatas = require('../data/imageData.json');
//将图片名信息转换为图片url信息
imageDatas = (function genImageURL(imageDatasArr){
  for(var i = 0;i<imageDatasArr.length;i++){
    var singleIamgeData = imageDatasArr[i];
    singleIamgeData.imageURL = require('../images/'+singleIamgeData.fileName);
    imageDatasArr[i] = singleIamgeData;
  }

  return imageDatasArr;
})(imageDatas);

var GalleryByReactApp = React.createClass({
  render: function(){
    return(
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
});

GalleryByReactApp.defaultProps = {
};

export default GalleryByReactApp;
