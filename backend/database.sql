-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: tribo
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idOwner` int NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `title` varchar(128) NOT NULL,
  `publishedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_blog_user1_idx` (`idOwner`),
  CONSTRAINT `fk_blog_user1` FOREIGN KEY (`idOwner`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boardgame`
--

DROP TABLE IF EXISTS `boardgame`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boardgame` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `imgUrl` varchar(512) DEFAULT NULL,
  `description` text NOT NULL,
  `minPlayers` int NOT NULL DEFAULT '0',
  `maxPlayers` int NOT NULL DEFAULT '250',
  `minDuration` int NOT NULL DEFAULT '0',
  `maxDuration` int NOT NULL DEFAULT '600',
  `minAge` int NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `year` int NOT NULL,
  `idOwner` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_boardgame_user1_idx` (`idOwner`),
  CONSTRAINT `fk_boardgame_user1` FOREIGN KEY (`idOwner`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=503 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardgame`
--

LOCK TABLES `boardgame` WRITE;
/*!40000 ALTER TABLE `boardgame` DISABLE KEYS */;
INSERT INTO `boardgame` VALUES (404,'Scythe','https://cdn.shopify.com/s/files/1/0513/4077/1515/products/scythe-board-game.jpg?v=1611090922','<p>  Scythe  gives players almost complete control over their fate. Other than each player\'s individual hidden objective card, the only elements of luck or variability are \"Encounter\" cards that players will draw as they interact with the citizens of newly explored lands. Each encounter card provides the player with several options, allowing them to mitigate the luck of the draw through their selection. Combat is also driven by choices, not luck or randomness.   Scythe  uses a streamlined action-selection mechanism (no rounds or phases) to keep gameplay moving at a brisk pace and reduce downtime between turns. Whinxfvnxvbnvnble there is plenty of direct conflict for players who seek it, there is no player elimination.  Every part of  Scythe  has an aspect of engine-building to it. Players can upgrade actions to become more efficient, build structures that improve their position on the map, enlist new recruits to enhance character abilities, activate mechs to deter opponents from invading, and expand their borders to reap greater types and quantities of resources. These engine-building aspects create a sense of momentum and progress throughout the game. The order in which players improve their engine adds to the unique feel of each game, even when playing one faction multiple times. </p>',1,5,90,120,14,'2022-12-14 21:31:58',2016,NULL),(405,'Wingspan','https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629325193747.png','<p>   Wingspan   is&nbsp;a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games.   You are bird enthusiasts—researchers, bird watchers, ornithologists, and collectors—seeking to discover and attract the best birds dsfgdsfhdsfhsto your aviary. Each bird extends a chain of powerful combinations in one of your habitats (actions). These habitats focus on several key aspects of growth:     Gain food tokens via custom dice in a birdfeeder dice tower   Lay eggs using egg miniatures in a variety of colors   Draw from hundreds of unique bird cards and play them     The winner is the player with the most points after 4 rounds. </p>',1,5,40,70,10,'2022-12-14 21:31:27',2019,NULL),(406,'Gloomhaven','https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254920151-51ulRXlJ7LL.jpg','<h1>Best. Game. Ever</h1><p>  <strong>Gloomhaven  </strong>is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world.  Players must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process they will enhance their abilities with experience and loot, discover new locations to explore<em> and plunder, and expand an ever-branching story fueled by the decisions they make.  This is a legacy game w</em>ith a persistent and changing world that is ideally played over many game sessions. After a scenario, players will make decisions on what to do, which will determine how the story continues, kind of like a \"Choose Your Own Adventure\" book. Playing through a scenario is a cooperative affair where players will fight against automated monsters using an innovative card system to determine the order of play and what a player does on their turn. </p>',1,4,60,150,12,'2022-12-14 21:33:16',2017,NULL),(408,'Azul','https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254200327-61EFZADvURL.jpg','  Azul  was designed by the world famous, award-winning game author Michael Riesling. Azul captures the beautiful aesthetics of Moorish art in a contemporary board game. \r\n Players compete as artisans decorating the walls of the royal Palace of Dvora. By carefully drafting the correct Quantity and style of tiles, the most clever of artisans plan ahead to maximize the beauty of their work (not to mention their scores!) while ensuring they wasted no supplies in the process. \r\n Introduced by the moors, \"azulejos\" (originally white and blue ceramic tiles) were fully embraced by the Portuguese, when their King Manuel I, on a visit to the Alhambra Palace in Southern Spain, was mesmerized by the stunning beauty of the Moorish decorative tiles. The King, awestruck by the interior beauty of the Alhambra, immediately ordered that his own Palace in Portugal be decorated with similar wall tiles. \r\n As a tile-laying artist, you have been challenged to embellish the walls of the royal Palace of Dvora. ',2,4,30,60,8,'2022-12-06 21:38:22',2017,NULL),(409,'Viticulture: Essential Edition','https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629323034692.jpg',' Viticulture is a worker-placement game set in the foothills of Tuscany. The Essential Edition includes the second edition of Viticulture along with several elements from the original Tuscany expansion pack, hand-picked by famed designer Uwe Rosenberg. ',1,6,90,120,13,'2022-12-06 21:38:22',2015,NULL),(410,'Pandemic','https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254186140-51iNoyxoamL.jpg',' After five years of Pandemic, hundreds of thousands of players have contracted the virus! To celebrate this milestone, Pandemic has been completely re-designed. With new artwork by Chris Quilliams (Clash of Cultures, Merchants & Marauders), Pandemic will now have a more modern look, inside and outside the box. With two new characters (the Contingency Planner and the Quarantine Specialist) face the game in ways you never thought possible as brand-new, virulent challenges await you! \r\n In   Pandemic  , several virulent diseases have broken out simultaneously all over the world! The players are disease-fighting specialists whose mission is to treat disease hotspots while researching cures for each of four plagues before they get out of hand. \r\n The game board depicts several major population centers on Earth. On each turn, a player can use up to four actions to travel between cities, treat infected populaces, discover a cure, or build a research station. A deck of cards provides the players with these abilities, but sprinkled throughout this deck are  Epidemic!  cards that accelerate and intensify the diseases\' activity. A second, separate deck of cards controls the \"normal\" spread of the infections. \r\n Taking a unique role within the team, players must plan their strategy to mesh with their specialists\' strengths in order to conquer the diseases. For example, the Operations Expert can build research stations which are needed to find cures for the diseases and which allow for greater mobility between cities; the Scientist needs only four cards of a particular disease to cure it instead of the normal five—but the diseases are spreading quickly and time is running out. If one or more diseases spreads beyond recovery or if too much time elapses, the players all lose. If they cure the four diseases, they all win! \r\n The 2013 edition of  Pandemic  includes two new characters—the Contingency Planner and the Quarantine Specialist—not available in earlier editions of the game. \r\n Artists: \r\n Joshua Cappel (graphics and illustration) \r\n Régis Moulun (cover painting) \r\n Chris Quilliams (2013 edition)    ',2,4,45,60,8,'2022-12-06 21:38:22',2008,NULL),(412,'7 Wonders Duel','https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629323024736.jpg',' Experience an intense two-player struggle for supremacy in the ancient world!Designed by Antoine Bauza and Bruno Cathala, 7 Wonders: Duel adapts the game play and excitement of 7 Wonders for one-on- one battles. Choose the Wonders you aim to build and guide your city through three Ages of drafting cards from cunningly shaped tableaus. Victory can be achieved in three ways: by invading your opponent\'s capital, by achieving a monopoly on scientific advancement, or simply by crafting the city that will earn the most victory points in the end. But be warned: only seven of the eight Wonders in play can be built.Will your city achieve greatness, or will your opponent prevent you from completing all your Wonders? ',2,2,30,45,10,'2022-12-06 21:38:22',2015,NULL),(413,'7 Wonders','https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559253945470-61dlm9QcXpL.jpg',' You are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times!    7 Wonders  is a simple and addictive game for the whole family. In 30 minutes you can raise a complete civilization and build the greatest Wonders of the World. \r\n  Winner of the 2011 Kennerspiel des Jahres (Enthusiasts Game of the Year) Award.  ',2,7,30,45,10,'2022-12-06 21:38:22',2010,NULL),(418,'Pandemic Legacy: Season 1','https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257833516-612BUfjuA7fL.jpg',' The world is on the brink of disaster. In Pandemic Legacy, your disease-fighting team must keep four deadly diseases at bay for a whole year. Each month will bring new surprises, and your actions in each game will have repercussions on the next. Will you let cities fall to the diseases? Will your team be enough to keep the viruses at bay for a whole year? Craft your own unique Pandemic experience with Pandemic Legacy. \r\n  Pandemic Legacy  is a co-operative campaign game, with an overarching story-arc played through 12-24 sessions, depending on how well your group does at the game. At the beginning, the game starts very similar to basic   Pandemic  , in which your team of disease-fighting specialists races against the clock to travel around the world, treating disease hotspots while researching cures for each of four plagues before they get out of hand. \r\n During a player\'s turn, they have four actions available, with which they may travel around in the world in various ways (sometimes needing to discard a card), build structures like research stations, treat diseases (removing one cube from the board; if all cubes of a color have been removed, the disease has been eradicated), trade cards with other players, or find a cure for a disease (requiring five cards of the same color to be discarded while at a research station). Each player has a unique role with special abilities to help them at these actions. \r\n After a player has taken their actions, they draw two cards. These cards can include epidemic cards, which will place new disease cubes on the board, and can lead to an outbreak, spreading disease cubes even further. Outbreaks additionally increase the panic level of a city, making that city more expensive to travel to. \r\n Each month in the game, you have two chances to achieve that month\'s objectives. If you succeed, you win and immediately move on to the next month. If you fail, you have a second chance, with more funding for beneficial event cards. \r\n During the campaign, new rules and components will be introduced. These will sometimes require you to permanently alter the components of the game; this includes writing on cards, ripping up cards, and placing permanent stickers on components. Your characters can gain new skills, or detrimental effects. A character can even be lost entirely, at which point it\'s no longer available for play. ',2,4,60,75,13,'2022-12-06 21:38:22',2015,NULL);
/*!40000 ALTER TABLE `boardgame` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boardgames_have_creators`
--

DROP TABLE IF EXISTS `boardgames_have_creators`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boardgames_have_creators` (
  `idBoardgame` int NOT NULL AUTO_INCREMENT,
  `idCreator` varchar(16) NOT NULL,
  `role` varchar(16) NOT NULL,
  PRIMARY KEY (`idBoardgame`,`idCreator`)
) ENGINE=InnoDB AUTO_INCREMENT=419 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardgames_have_creators`
--

LOCK TABLES `boardgames_have_creators` WRITE;
/*!40000 ALTER TABLE `boardgames_have_creators` DISABLE KEYS */;
INSERT INTO `boardgames_have_creators` VALUES (404,'company#2','publishers'),(404,'figure#5','designers'),(404,'figure#6','artists'),(406,'company#3','publishers'),(406,'figure#12','designers'),(406,'figure#13','artists'),(406,'figure#14','artists'),(406,'figure#15','artists'),(408,'company#1','publishers'),(408,'figure#2','artists'),(408,'figure#3','artists'),(408,'figure#4','designers'),(409,'company#2','publishers'),(409,'figure#10','artists'),(409,'figure#11','artists'),(409,'figure#9','designers'),(410,'company#4','publishers'),(410,'figure#10','designers'),(410,'figure#11','artists'),(410,'figure#12','artists'),(410,'figure#13','artists'),(412,'company#5','publishers'),(412,'figure#14','designers'),(412,'figure#15','designers'),(412,'figure#16','artists'),(413,'company#5','publishers'),(413,'figure#14','designers'),(413,'figure#15','designers'),(413,'figure#16','artists'),(418,'company#4','publishers'),(418,'figure#10','designers'),(418,'figure#11','artists'),(418,'figure#12','artists'),(418,'figure#13','artists');
/*!40000 ALTER TABLE `boardgames_have_creators` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `circle`
--

DROP TABLE IF EXISTS `circle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `circle` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idOwner` int NOT NULL,
  `name` varchar(32) NOT NULL,
  `description` text,
  `createdAt` datetime NOT NULL,
  `isPublic` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fk_circle_user1_idx` (`idOwner`),
  CONSTRAINT `fk_circle_user1` FOREIGN KEY (`idOwner`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `circle`
--

LOCK TABLES `circle` WRITE;
/*!40000 ALTER TABLE `circle` DISABLE KEYS */;
INSERT INTO `circle` VALUES (2,11,'Friends','My frends','2023-01-30 22:36:13',1);
/*!40000 ALTER TABLE `circle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `circles_have_users`
--

DROP TABLE IF EXISTS `circles_have_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `circles_have_users` (
  `circle_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`circle_id`),
  KEY `fk_circle_has_user_user1_idx` (`user_id`),
  KEY `fk_circle_has_user_circle1_idx` (`circle_id`),
  CONSTRAINT `fk_circle_has_user_circle1` FOREIGN KEY (`circle_id`) REFERENCES `circle` (`id`),
  CONSTRAINT `fk_circle_has_user_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `circles_have_users`
--

LOCK TABLES `circles_have_users` WRITE;
/*!40000 ALTER TABLE `circles_have_users` DISABLE KEYS */;
INSERT INTO `circles_have_users` VALUES (2,12),(2,13);
/*!40000 ALTER TABLE `circles_have_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collection`
--

DROP TABLE IF EXISTS `collection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collection` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `createdAt` datetime NOT NULL,
  `description` varchar(256) DEFAULT NULL,
  `idOwner` int NOT NULL,
  `isPublic` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fk_list_user1_idx` (`idOwner`),
  CONSTRAINT `fk_list_user1` FOREIGN KEY (`idOwner`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collection`
--

LOCK TABLES `collection` WRITE;
/*!40000 ALTER TABLE `collection` DISABLE KEYS */;
INSERT INTO `collection` VALUES (2,'Mes jeux','2023-03-01 21:00:00','Mes jeux preferes',12,1),(3,'Mes jeux ','2023-03-01 21:00:00','Les jeux que je possede',13,1),(4,'Mes jeux','2023-03-01 21:00:00','My games',11,1);
/*!40000 ALTER TABLE `collection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collections_have_boardgames`
--

DROP TABLE IF EXISTS `collections_have_boardgames`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collections_have_boardgames` (
  `idCollection` int NOT NULL,
  `idBoardgame` int NOT NULL,
  PRIMARY KEY (`idCollection`,`idBoardgame`),
  KEY `fk_list_has_boardgame_boardgame1_idx` (`idBoardgame`),
  KEY `fk_list_has_boardgame_list1_idx` (`idCollection`),
  CONSTRAINT `fk_list_has_boardgame_boardgame1` FOREIGN KEY (`idBoardgame`) REFERENCES `boardgame` (`id`),
  CONSTRAINT `fk_list_has_boardgame_list1` FOREIGN KEY (`idCollection`) REFERENCES `collection` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collections_have_boardgames`
--

LOCK TABLES `collections_have_boardgames` WRITE;
/*!40000 ALTER TABLE `collections_have_boardgames` DISABLE KEYS */;
INSERT INTO `collections_have_boardgames` VALUES (2,404),(4,404),(2,405),(4,405),(2,406),(4,406),(2,408),(2,409),(2,410),(2,412),(2,413);
/*!40000 ALTER TABLE `collections_have_boardgames` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idOwner` int NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `idParent` int DEFAULT NULL,
  `idTarget` varchar(32) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_comment_comment1_idx` (`idParent`),
  KEY `fk_comment_1_idx` (`idOwner`),
  CONSTRAINT `fk_comment_1` FOREIGN KEY (`idOwner`) REFERENCES `user` (`id`),
  CONSTRAINT `fk_comment_comment1` FOREIGN KEY (`idParent`) REFERENCES `comment` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `country` varchar(32) NOT NULL,
  `avatarUrl` varchar(512) DEFAULT NULL,
  `siteUrl` varchar(512) NOT NULL,
  `isActive` tinyint NOT NULL DEFAULT '1',
  `biography` text,
  `createdAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'Next Move Games','USA',NULL,'https://planbgames.com/next-move',1,NULL,'2022-12-19 21:30:00'),(2,'Stonemaier Games','USA',NULL,'https://stonemaiergames.com/',1,NULL,'2022-12-19 21:30:00'),(3,'Cephalofair Games','USA',NULL,'https://cephalofair.com/',1,NULL,'2022-12-19 21:30:00'),(4,'Z-Man Games, Inc.','USA',NULL,'https://www.zmangames.com/en/index/',1,NULL,'2022-12-19 21:30:00'),(5,'Asmodee','USA',NULL,'https://corporate.asmodee.com/',1,NULL,'2022-12-19 21:30:00');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `creator`
--

DROP TABLE IF EXISTS `creator`;
/*!50001 DROP VIEW IF EXISTS `creator`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `creator` AS SELECT 
 1 AS `entityId`,
 1 AS `entityType`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `location` varchar(64) NOT NULL,
  `timestamp` datetime NOT NULL,
  `idOwner` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `dsqdsq_idx` (`idOwner`),
  CONSTRAINT `dsqdsq` FOREIGN KEY (`idOwner`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (21,'Chez ValhallaCode','2023-03-08 20:30:00',11),(22,'Chez VallyC','2023-03-21 22:38:00',11);
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_has_boardgame`
--

DROP TABLE IF EXISTS `event_has_boardgame`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_has_boardgame` (
  `event_id` int NOT NULL,
  `boardgame_id` int NOT NULL,
  PRIMARY KEY (`event_id`,`boardgame_id`),
  KEY `fk_event_has_boardgame_boardgame1_idx` (`boardgame_id`),
  KEY `fk_event_has_boardgame_event1_idx` (`event_id`),
  CONSTRAINT `fk_event_has_boardgame_boardgame1` FOREIGN KEY (`boardgame_id`) REFERENCES `boardgame` (`id`),
  CONSTRAINT `fk_event_has_boardgame_event1` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_has_boardgame`
--

LOCK TABLES `event_has_boardgame` WRITE;
/*!40000 ALTER TABLE `event_has_boardgame` DISABLE KEYS */;
INSERT INTO `event_has_boardgame` VALUES (21,404),(22,406),(21,410),(22,412);
/*!40000 ALTER TABLE `event_has_boardgame` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_has_user`
--

DROP TABLE IF EXISTS `event_has_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_has_user` (
  `event_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`event_id`,`user_id`),
  KEY `fk_event_has_user_user1_idx` (`user_id`),
  KEY `fk_event_has_user_event1_idx` (`event_id`),
  CONSTRAINT `fk_event_has_user_event1` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`),
  CONSTRAINT `fk_event_has_user_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_has_user`
--

LOCK TABLES `event_has_user` WRITE;
/*!40000 ALTER TABLE `event_has_user` DISABLE KEYS */;
INSERT INTO `event_has_user` VALUES (21,12),(22,12),(21,13),(22,13);
/*!40000 ALTER TABLE `event_has_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `figure`
--

DROP TABLE IF EXISTS `figure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `figure` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(16) DEFAULT NULL,
  `surname` varchar(32) DEFAULT NULL,
  `lastname` varchar(64) DEFAULT NULL,
  `birthYear` int DEFAULT NULL,
  `siteUrl` varchar(512) DEFAULT NULL,
  `biography` text,
  `createdAt` datetime NOT NULL,
  `avatarUrl` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `figure`
--

LOCK TABLES `figure` WRITE;
/*!40000 ALTER TABLE `figure` DISABLE KEYS */;
INSERT INTO `figure` VALUES (2,'Philippe',NULL,'Guérin',NULL,NULL,NULL,'2022-12-19 21:30:00',NULL),(3,'Chris',NULL,'Quilliams',NULL,NULL,NULL,'2022-12-19 21:30:00',NULL),(4,'Michael',NULL,'Kiesling',NULL,NULL,NULL,'2022-12-19 21:30:00',NULL),(5,'Jamey',NULL,'Stegmaier',NULL,NULL,NULL,'2022-12-19 21:30:00',NULL),(6,'Jakub',NULL,'Różalski',NULL,NULL,NULL,'2022-12-19 21:30:00',NULL),(9,'Elizabeth',NULL,'Hargrave',NULL,NULL,NULL,'2022-12-19 21:30:00',NULL),(10,'Natalia',NULL,'Rojas',NULL,NULL,NULL,'2022-12-19 21:30:00',NULL),(11,'Beth',NULL,'Sobel',NULL,NULL,NULL,'2022-12-19 21:30:00',NULL),(12,'Isaac',NULL,'Childres',NULL,NULL,NULL,'2022-12-19 21:30:00',NULL),(13,'Alexandr',NULL,'Elichev',NULL,NULL,NULL,'2022-12-19 21:30:00',NULL),(14,'Josh',NULL,'McDowell',NULL,NULL,NULL,'2022-12-19 21:30:00',NULL),(15,'Alvaro',NULL,'Nebot',NULL,NULL,NULL,'2022-12-19 21:30:00',NULL),(16,'Matt',NULL,'Leacock',NULL,NULL,NULL,'2022-12-19 21:30:00',NULL),(17,'Joshua',NULL,'Cappel',NULL,NULL,NULL,'2022-12-19 21:30:00',NULL),(18,'Régis',NULL,'Moulun',NULL,NULL,NULL,'2022-12-19 21:30:00',NULL),(19,'Chris',NULL,'Quilliams',NULL,NULL,NULL,'2022-12-19 21:30:00',NULL),(20,'Antoine',NULL,'Bauza',NULL,NULL,NULL,'2022-12-19 21:30:00',NULL),(21,'Bruno',NULL,'Cathala',NULL,NULL,NULL,'2022-12-19 21:30:00',NULL),(22,'Miguel',NULL,'Coimbra',NULL,NULL,NULL,'2022-12-19 21:30:00',NULL);
/*!40000 ALTER TABLE `figure` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `searchable`
--

DROP TABLE IF EXISTS `searchable`;
/*!50001 DROP VIEW IF EXISTS `searchable`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `searchable` AS SELECT 
 1 AS `id`,
 1 AS `entityType`,
 1 AS `haystack`,
 1 AS `label`,
 1 AS `thumb`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(32) NOT NULL,
  `type` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `label_UNIQUE` (`label`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags_have_targets`
--

DROP TABLE IF EXISTS `tags_have_targets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags_have_targets` (
  `idTarget` varchar(32) NOT NULL,
  `idTag` int NOT NULL,
  `idOwner` int NOT NULL,
  PRIMARY KEY (`idTag`,`idTarget`),
  KEY `fk_tag_has_target_tag1_idx` (`idTag`),
  KEY `fk_tag_has_target_user1_idx` (`idOwner`),
  CONSTRAINT `fk_tag_has_target_tag1` FOREIGN KEY (`idTag`) REFERENCES `tag` (`id`),
  CONSTRAINT `fk_tag_has_target_user1` FOREIGN KEY (`idOwner`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags_have_targets`
--

LOCK TABLES `tags_have_targets` WRITE;
/*!40000 ALTER TABLE `tags_have_targets` DISABLE KEYS */;
/*!40000 ALTER TABLE `tags_have_targets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `targettable`
--

DROP TABLE IF EXISTS `targettable`;
/*!50001 DROP VIEW IF EXISTS `targettable`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `targettable` AS SELECT 
 1 AS `idTarget`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(32) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(64) NOT NULL,
  `avatarUrl` varchar(512) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `pseudo_UNIQUE` (`pseudo`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (11,'ValhallaCode','toto@spamland.com','$2b$08$scD3iqVlF3Fo.n5QgVAWDOH93azGltLCQ2Q0abWtGwbPQkdmuSzAi','',NULL,'2023-01-30 22:36:13'),(12,'Sax593','sax@spamland.com','dsgdghfxfhjg',NULL,NULL,'2023-01-30 22:36:13'),(13,'LadyBug','lady@spamland.com','sdfgdfgdsfgdsfg',NULL,NULL,'2023-01-30 22:36:13');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `creator`
--

/*!50001 DROP VIEW IF EXISTS `creator`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`tribo`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `creator` AS select `figure`.`id` AS `entityId`,'figure' AS `entityType` from `figure` union select `company`.`id` AS `entityId`,'company' AS `entityType` from `company` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `searchable`
--

/*!50001 DROP VIEW IF EXISTS `searchable`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`tribo`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `searchable` AS select `user`.`id` AS `id`,'users' AS `entityType`,concat_ws(' | ',`user`.`pseudo`) AS `haystack`,`user`.`pseudo` AS `label`,`user`.`avatarUrl` AS `thumb` from `user` union select `boardgame`.`id` AS `id`,'boardgames' AS `entityType`,concat_ws(' | ',`boardgame`.`name`,`boardgame`.`description`) AS `haystack`,`boardgame`.`name` AS `label`,`boardgame`.`imgUrl` AS `thumb` from `boardgame` union select `collection`.`id` AS `id`,'collections' AS `entityType`,concat_ws(' | ','') AS `haystack`,`collection`.`name` AS `label`,NULL AS `thumb` from `collection` union select `blog`.`id` AS `id`,'blogs' AS `entityType`,concat_ws(' | ',`blog`.`title`,`blog`.`content`) AS `haystack`,`blog`.`title` AS `label`,NULL AS `thumb` from `blog` union select `tag`.`id` AS `id`,'tags' AS `entityType`,concat_ws(' | ',`tag`.`label`) AS `haystack`,`tag`.`label` AS `label`,NULL AS `thumb` from `tag` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `targettable`
--

/*!50001 DROP VIEW IF EXISTS `targettable`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`tribo`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `targettable` AS select concat_ws('#','boardgame',`boardgame`.`id`) AS `idTarget` from `boardgame` union select concat_ws('#','user',`user`.`id`) AS `idTarget` from `user` union select concat_ws('#','blog',`blog`.`id`) AS `idTarget` from `blog` union select concat_ws('#','tag',`tag`.`id`) AS `idTarget` from `tag` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-20 20:25:08
