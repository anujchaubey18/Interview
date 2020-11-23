-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2020 at 07:35 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_products`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_products`
--

CREATE TABLE `tbl_products` (
  `ID` int(11) NOT NULL,
  `product_id` varchar(50) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_description` text DEFAULT NULL,
  `product_quantity` int(11) DEFAULT NULL,
  `seller_emailid` varchar(255) DEFAULT NULL,
  `seller_contactno` varchar(12) DEFAULT NULL,
  `createddate` timestamp NOT NULL DEFAULT current_timestamp(),
  `updateddate` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `product_status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_products`
--

INSERT INTO `tbl_products` (`ID`, `product_id`, `product_name`, `product_description`, `product_quantity`, `seller_emailid`, `seller_contactno`, `createddate`, `updateddate`, `product_status`) VALUES
(1, 'PR954', 'Shirt', 'Cloth Clock Women Crepe Un-Stitched Salwar Suit Dress Material', 1, 'abc@gmail.com', '8779865852', '2020-11-23 18:21:25', NULL, 1),
(2, 'PR203', 'Redmi', 'Redmi Note 9', 3, 'asdf@test.com', '9754585652', '2020-11-23 18:23:03', NULL, 1),
(3, 'PR400', 'Ring', 'Men Rings', 2, 'men@gmail.com', '9876548525', '2020-11-23 18:34:08', '2020-11-23 18:34:26', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_products`
--
ALTER TABLE `tbl_products`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_products`
--
ALTER TABLE `tbl_products`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
