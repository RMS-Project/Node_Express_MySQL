CREATE DATABASE APP_DATABASE;
/* DROP DATABASE APP_DATABASE; */

SHOW DATABASES;

USE `APP_DATABASE`;

CREATE TABLE `APP_DATABASE`.`category` (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name` VARCHAR(45) NOT NULL
);
  
CREATE TABLE `APP_DATABASE`.`news` (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_category`INT NOT NULL,
	`title` VARCHAR(255) NOT NULL,
	`content` TEXT NOT NULL,
    FOREIGN KEY (id_category) REFERENCES category(id)
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

INSERT INTO `APP_DATABASE`.`news` (`id_category`,`title`, `content`) VALUES ('1', 'Best TV Show of all time', 'It\'s Supernatural series ...');
INSERT INTO `APP_DATABASE`.`news` (`id_category`, `title`, `content`) VALUES ('2', 'Pigossi and Stefani claim Brazil’s first Olympic tennis medal', 'Laura Pigossi and Luisa Stefani pulled off an implausible rebound triumph in the bronze-decoration last at the Tokyo Olympics on Saturday, collecting a noteworthy first Olympic award in tennis for Brazil.');
INSERT INTO `APP_DATABASE`.`news` (`id_category`, `title`, `content`) VALUES ('2', 'Pakistan vs England: Harry Brook & Ben Duckett star with bat as tourists retake series lead', 'England take 2-1 series lead after Harry Brook and Ben Duckett share unbeaten 139-run stand to help tourists post 221-3; Pakistan slump to 158-8 as Mark Wood impresses on return; watch the fourth T20I between Pakistan and England live on Sky Sports Cricket at 3pm on Sunday');


SELECT * FROM APP_DATABASE.news;

SELECT id, title, content FROM APP_DATABASE.news WHERE id_category = 2;

SELECT id, title, content FROM APP_DATABASE.news WHERE id_category = 1 AND id = 1;
