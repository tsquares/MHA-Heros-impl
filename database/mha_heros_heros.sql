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
-- Table structure for table `heros`
--

DROP TABLE IF EXISTS `heros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `heros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `blood_type` varchar(45) DEFAULT NULL,
  `affiliation` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `heros_to_affiliation_idx` (`affiliation`),
  CONSTRAINT `heros_to_affiliation` FOREIGN KEY (`affiliation`) REFERENCES `affiliations` (`affiliation`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `heros`
--

LOCK TABLES `heros` WRITE;
/*!40000 ALTER TABLE `heros` DISABLE KEYS */;
INSERT INTO `heros` VALUES (1,'Toshinori','Yagi','All Might','All Might',NULL,'9999-06-10','A','UA_HIGH_SCHOOL'),(2,'Izuku','Midoriya','Deku','i<3a11might',NULL,'9999-07-15','O','UA_HIGH_SCHOOL'),(3,'Katsuki','Bakugo','Great Explosion Murder God Dynamight',NULL,NULL,'9999-04-20','A','UA_HIGH_SCHOOL'),(4,'Shoto','Todoroki','Shoto','daddyissues123',NULL,'9999-01-11','O','UA_HIGH_SCHOOL'),(5,'Mirio','Togata','Lemillion','lucas',NULL,'9999-07-15','O','UA_HIGH_SCHOOL'),(6,'Nejire','Hado','Nejire Chan','Nejire Chan',NULL,'9999-10-06','B','UA_HIGH_SCHOOL'),(7,'Tamaki','Amajiki','Suneater',NULL,NULL,'9999-03-04','AB','UA_HIGH_SCHOOL'),(8,'Emi','Fukukado','Ms. Joke','Smile Hero',NULL,'9999-02-05',NULL,'KETSUBUTSU_ACADEMY'),(9,'Tatami','Nakagame','Turtle Neck',NULL,NULL,'9999-01-23','A','KETSUBUTSU_ACADEMY'),(10,'Yo','Shindo','Grand','Grand',NULL,'9999-05-13','AB','KETSUBUTSU_ACADEMY'),(11,'Inasa','Yoarashi','Gale Force','Gale Force',NULL,'9999-09-26','B','SHIKETSU_HIGH_SCHOOL'),(12,'Kemyi','Utsushimi','Maboromicamie',NULL,NULL,'9999-08-15','O','SHIKETSU_HIGH_SCHOOL'),(13,'Nagamasa','Mora','Chewyee','Chewyee',NULL,'9999-11-13','O','SHIKETSU_HIGH_SCHOOL'),(14,'Seiji','Shishikura','Sisicross',NULL,NULL,'9999-02-09','A','SHIKETSU_HIGH_SCHOOL'),(15,'Shino','Sosaki','Mandalay',NULL,NULL,'9999-05-01','A','HERO_ASSOCIATION'),(16,'Ryuko','Tsuchikawa','Pixie-Bob',NULL,NULL,'9999-06-26','AB','HERO_ASSOCIATION'),(17,'Tomoko','Shiretoko','Ragdoll',NULL,NULL,'9999-04-08','O','HERO_ASSOCIATION'),(18,'Yawara','Chatora','Tiger',NULL,NULL,'1984-02-29','A','HERO_ASSOCIATION'),(19,'Tsuyu','Asui','Froppy','kerokero',NULL,'9999-02-12','A','UA_HIGH_SCHOOL');
/*!40000 ALTER TABLE `heros` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-28  3:08:31
