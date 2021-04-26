-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mha_heros
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `super_moves`
--

DROP TABLE IF EXISTS `super_moves`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `super_moves` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(140) DEFAULT NULL,
  `range` varchar(45) DEFAULT NULL,
  `usage` varchar(45) DEFAULT NULL,
  `hero_id` int DEFAULT NULL,
  `quirk_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `super_moves_to_hero_idx` (`hero_id`),
  KEY `super_moves_to_quirk_idx` (`quirk_id`),
  CONSTRAINT `super_moves_to_hero` FOREIGN KEY (`hero_id`) REFERENCES `heros` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `super_moves_to_quirk` FOREIGN KEY (`quirk_id`) REFERENCES `quirks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `super_moves`
--

LOCK TABLES `super_moves` WRITE;
/*!40000 ALTER TABLE `super_moves` DISABLE KEYS */;
INSERT INTO `super_moves` VALUES (1,'Detroit Smash','simple punch focusing One For All\'s stockpiling power into the fist','close','offense',1,1),(2,'United States of Smash','a smash attack that concentrates all of One For All\'s remaining power into All Might\'s fist','close','offense',1,1),(3,'Delaware Smash','Izuku uses One For All at full power and flicks his fingers to create powerful shockwaves','medium','offense',2,1),(4,'Texas Smash','a right punch with enough force that the wind pressure sends anything made of liquid flying away','close','offense',1,1),(5,'Tremoring Earth','After two small pulses of energy, the ground surrounding him shakes and breaks apart, similar to an earthquake','long','multi-target offense',10,NULL),(6,'Blinder Touch Eyeball Crush','While phasing through an incoming attack, Mirio fakes going for his opponent\'s eyes with his fingers','close','distraction',5,NULL),(7,'Flashfire Fist','condenses Endeavor\'s flames into a white-hot point and is meant to act as a one-hit finisher','medium','power up',NULL,6),(8,'Prominence Burn','Endeavor uses the full might of his flames to emit a concentrated beam of heat from his body that is used to vaporize his target','multi','offense',NULL,6);
/*!40000 ALTER TABLE `super_moves` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-19 20:57:59
