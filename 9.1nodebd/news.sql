/*
Navicat MySQL Data Transfer

Source Server         : localhost88
Source Server Version : 50525
Source Host           : localhost:3306
Source Database       : bdnews

Target Server Type    : MYSQL
Target Server Version : 50525
File Encoding         : 65001

Date: 2017-01-15 14:58:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(200) NOT NULL AUTO_INCREMENT,
  `newsType` varchar(200) DEFAULT NULL,
  `newsTittle` varchar(255) DEFAULT NULL,
  `newsImg` varchar(255) DEFAULT NULL,
  `newsTime` date DEFAULT NULL,
  `newsSrc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('25', '军事', '不要惧怕AI，我们是他们的上帝！', 'img/2.png', '2017-01-12', '新浪财经');
INSERT INTO `news` VALUES ('26', '图片', ' 冯小刚《芳华》新人女主曝光 搭档黄轩', 'img/6.jpg', '0000-00-00', '四川在线');
INSERT INTO `news` VALUES ('28', '推荐', '沉沉雾霾中，人和钱仍在涌向北京', 'img/3.jpg', '2017-01-07', '人民日报');
INSERT INTO `news` VALUES ('29', '推荐', '抓紧时间学习,成为你喜欢领域的精英吧!', 'img/2.png', '2017-01-06', '极客');
INSERT INTO `news` VALUES ('30', '精选', '滴滴裁员一半不准确，可能超过60%', 'img/9.jpg', '2017-01-06', '新浪网');
INSERT INTO `news` VALUES ('31', '军事', '外媒:中国海警船钓鱼岛巡航 日本', 'img/2.png', '2017-01-04', '军事网');
INSERT INTO `news` VALUES ('32', '图片', '抓紧时间学习,成为你喜欢领域的精英吧!', 'img/5.jpg', '2017-01-06', '娱乐网');
INSERT INTO `news` VALUES ('33', '图片', '抓紧时间学习,成为你喜欢领域的精英吧!', 'img/7.jpg', '2017-01-06', 'jike');
INSERT INTO `news` VALUES ('35', '军事', '你好吗', 'img/1.png', '2017-01-13', 'king');
INSERT INTO `news` VALUES ('36', '图片', '电视剧娱乐', 'img/4.jpg', '2017-01-07', '搜狐');
INSERT INTO `news` VALUES ('37', '百家', '支撑比特币冲破8000元的“三根支柱”会断吗？', 'img/7.jpg', '2017-01-06', '百度新闻');
INSERT INTO `news` VALUES ('38', '精选', '支撑比特币冲破8000元的“三根支柱”会断吗？', 'img/7.jpg', '2017-01-06', '百度新闻');
INSERT INTO `news` VALUES ('40', '娱乐', '支撑比特币冲破8000元的“三根支柱”会断吗？', 'img/9.jpg', '2017-01-06', '百度新闻');
INSERT INTO `news` VALUES ('41', '推荐', '滴滴裁员一半不准确，可能超过60%', 'img/8.jpg', '2017-01-04', '新闻网');
INSERT INTO `news` VALUES ('42', '军事', '滴滴裁员一半不准确，可能超过60%', 'img/9.jpg', '2017-01-05', '新闻网');
INSERT INTO `news` VALUES ('43', '精选', '滴滴裁员一半不准确，可能超过60%', 'img/1.jpg', '2017-01-05', '新闻网');
INSERT INTO `news` VALUES ('44', '图片', '滴滴裁员一半不准确，可能超过60%', 'img/2.jpg', '2017-01-05', '新闻网');
INSERT INTO `news` VALUES ('45', '百家', '你好吗，我很好', 'img/5.jpg', '2017-01-11', '中国财经');
INSERT INTO `news` VALUES ('48', '精选', '欢乐颂欢乐颂', 'img/6.jpg', '2017-01-12', '中视网');
INSERT INTO `news` VALUES ('49', '军事', '88888888888', 'img/2.png', '2017-01-14', 'pppppppppppppppp');
INSERT INTO `news` VALUES ('55', '精选', 'ah/a', 'img/1.png', '2017-01-06', '00000');
INSERT INTO `news` VALUES ('56', '精选', 'alert(\"n\")', 'img/1.png', '2017-01-06', 'k');
