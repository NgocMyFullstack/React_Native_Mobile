-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: app_coffee
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `coffees`
--

DROP TABLE IF EXISTS `coffees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coffees` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `res_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKf8e5x8chjteolk8bxfn5i5qbm` (`res_id`),
  CONSTRAINT `FKf8e5x8chjteolk8bxfn5i5qbm` FOREIGN KEY (`res_id`) REFERENCES `restaurants` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coffees`
--

LOCK TABLES `coffees` WRITE;
/*!40000 ALTER TABLE `coffees` DISABLE KEYS */;
INSERT INTO `coffees` VALUES (1,'https://iili.io/J3V9tlS.png','Americano',30,1),(2,'https://iili.io/J3V9Zf2.png','Capuchino',25,1),(3,'https://iili.io/J3V9Lil.png','Latte',32,1),(4,'https://iili.io/J3V9sV4.png','Flat White',25,1),(5,'https://iili.io/J3V9ixf.png','Raf',30,1),(6,'https://iili.io/J3V96DG.png','Espresso',24,1),(7,'https://iili.io/J3N4fQp.png','Vanilla',30,2),(8,'https://iili.io/J3N4KjR.png','White Mocha',25,2),(9,'https://iili.io/J3N4FTv.png','Mocha',32,2),(10,'https://iili.io/J3N4dva.png','Iced Coffee',25,2),(11,'https://iili.io/J3N4BCN.png','Machiato',30,2),(12,'https://iili.io/J3N42yJ.png','Milk Coffee',24,2),(13,'https://iili.io/J3V9Zf2.png','Capuchino',25,3),(14,'https://iili.io/J3V9Lil.png','Latte',32,3),(15,'https://iili.io/J3N4fQp.png','Vanilla',30,3),(16,'https://iili.io/J3N4KjR.png','White Mocha',25,3),(17,'https://iili.io/J3N4FTv.png','Mocha',32,3),(18,'https://iili.io/J3N4dva.png','Iced Coffee',25,3);
/*!40000 ALTER TABLE `coffees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `milks`
--

DROP TABLE IF EXISTS `milks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `milks` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `coffee_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKof33sjfdt2sw4y4f8rmk9pqlc` (`coffee_id`),
  CONSTRAINT `FKof33sjfdt2sw4y4f8rmk9pqlc` FOREIGN KEY (`coffee_id`) REFERENCES `coffees` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `milks`
--

LOCK TABLES `milks` WRITE;
/*!40000 ALTER TABLE `milks` DISABLE KEYS */;
INSERT INTO `milks` VALUES (1,'Cow\'s',1),(2,'Lactose-free',1),(3,'Skimmed',1),(4,'Vegetable',1),(5,'Almond',2),(6,'Oat',2),(7,'Skim',2),(8,'Cashew',2),(9,'Skimmed',3),(10,'Oat',3),(11,'Vegetable',3),(12,'Cashew',3),(13,'Skimmed',4),(14,'Oat',4),(15,'Vegetable',4),(16,'Cashew',4),(17,'Skimmed',5),(18,'Oat',5),(19,'Vegetable',5),(20,'Cashew',5),(21,'Skimmed',6),(22,'Oat',6),(23,'Vegetable',6),(24,'Cashew',6),(25,'Skimmed',7),(26,'Oat',7),(27,'Vegetable',7),(28,'Cashew',7),(29,'Skimmed',8),(30,'Oat',8),(31,'Vegetable',8),(32,'Cashew',8),(33,'Skimmed',9),(34,'Oat',9),(35,'Vegetable',9),(36,'Cashew',9),(37,'Skimmed',10),(38,'Oat',10),(39,'Vegetable',10),(40,'Cashew',10),(41,'Skimmed',11),(42,'Oat',11),(43,'Vegetable',11),(44,'Cashew',11),(45,'Skimmed',12),(46,'Oat',12),(47,'Vegetable',12),(48,'Cashew',12),(49,'Skimmed',13),(50,'Oat',13),(51,'Vegetable',13),(52,'Cashew',13),(53,'Skimmed',14),(54,'Oat',14),(55,'Vegetable',14),(56,'Cashew',14),(57,'Skimmed',15),(58,'Oat',15),(59,'Vegetable',15),(60,'Cashew',15),(61,'Skimmed',16),(62,'Oat',16),(63,'Vegetable',16),(64,'Cashew',16),(65,'Skimmed',17),(66,'Oat',17),(67,'Vegetable',17),(68,'Cashew',17),(69,'Skimmed',18),(70,'Oat',18),(71,'Vegetable',18),(72,'Cashew',18);
/*!40000 ALTER TABLE `milks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `milk` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `syrup` varchar(255) DEFAULT NULL,
  `coffee_id` bigint DEFAULT NULL,
  `order_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKlqyey5k4krki7tfy33qa4gyq4` (`coffee_id`),
  KEY `FKjyu2qbqt8gnvno9oe9j2s2ldk` (`order_id`),
  CONSTRAINT `FKjyu2qbqt8gnvno9oe9j2s2ldk` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `FKlqyey5k4krki7tfy33qa4gyq4` FOREIGN KEY (`coffee_id`) REFERENCES `coffees` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `total` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,72),(2,170);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurants`
--

DROP TABLE IF EXISTS `restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurants` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` VALUES (1,'Starbucks'),(2,'MC Coffee'),(3,'Peet\'s Coffee');
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `syrups`
--

DROP TABLE IF EXISTS `syrups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `syrups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `coffee_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKrkebjr8gpmyqtmp4kfo2qobnm` (`coffee_id`),
  CONSTRAINT `FKrkebjr8gpmyqtmp4kfo2qobnm` FOREIGN KEY (`coffee_id`) REFERENCES `coffees` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `syrups`
--

LOCK TABLES `syrups` WRITE;
/*!40000 ALTER TABLE `syrups` DISABLE KEYS */;
INSERT INTO `syrups` VALUES (1,'Amaretto',3),(2,'Coconut',3),(3,'Vanilla',3),(4,'Caramel',3),(5,'Peppermint',2),(6,'Coconut',2),(7,'Hazelnut',2),(8,'Caramel',2),(9,'Hazelnut',1),(10,'Peppermint',1),(11,'Irish Cream',1),(12,'Raspberry',1),(13,'Amaretto',4),(14,'Coconut',4),(15,'Vanilla',4),(16,'Caramel',4),(17,'Amaretto',5),(18,'Coconut',5),(19,'Vanilla',5),(20,'Caramel',5),(21,'Amaretto',6),(22,'Coconut',6),(23,'Vanilla',6),(24,'Caramel',6),(25,'Amaretto',7),(26,'Coconut',7),(27,'Vanilla',7),(28,'Caramel',7),(29,'Amaretto',8),(30,'Coconut',8),(31,'Vanilla',8),(32,'Caramel',8),(33,'Amaretto',9),(34,'Coconut',9),(35,'Vanilla',9),(36,'Caramel',9),(37,'Amaretto',10),(38,'Coconut',10),(39,'Vanilla',10),(40,'Caramel',10),(41,'Amaretto',11),(42,'Coconut',11),(43,'Vanilla',11),(44,'Caramel',11),(45,'Amaretto',12),(46,'Coconut',12),(47,'Vanilla',12),(48,'Caramel',12),(49,'Amaretto',13),(50,'Coconut',13),(51,'Vanilla',13),(52,'Caramel',13),(53,'Amaretto',14),(54,'Coconut',14),(55,'Vanilla',14),(56,'Caramel',14),(57,'Amaretto',15),(58,'Coconut',15),(59,'Vanilla',15),(60,'Caramel',15),(61,'Amaretto',16),(62,'Coconut',16),(63,'Vanilla',16),(64,'Caramel',16),(65,'Amaretto',17),(66,'Coconut',17),(67,'Vanilla',17),(68,'Caramel',17),(69,'Amaretto',18),(70,'Coconut',18),(71,'Vanilla',18),(72,'Caramel',18);
/*!40000 ALTER TABLE `syrups` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-13  1:42:33
