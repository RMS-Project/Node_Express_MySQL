SHOW DATABASE;

USE `APP_DATABASE`;

CREATE TABLE `APP_DATABASE`.`category` (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name` VARCHAR(45) NOT NULL
);
  
CREATE TABLE `APP_DATABASE`.`news` (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`title` VARCHAR(255) NOT NULL,
	`content` TEXT NOT NULL
);

CREATE TABLE `APP_DATABASE`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `APP_DATABASE`.`category` (`name`) VALUES ('TV News');
INSERT INTO `APP_DATABASE`.`category` (`name`) VALUES ('Sports');

SELECT id, name FROM APP_DATABASE.category;

INSERT INTO `APP_DATABASE`.`news` (`title`, `content`) VALUES ('Best TV Show of all time', 'It\'s Supernatural series ...');

SELECT * FROM APP_DATABASE.news;