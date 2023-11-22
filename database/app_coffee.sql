-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 22, 2023 lúc 12:37 PM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `app_coffee`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `coffees`
--

CREATE TABLE `coffees` (
  `id` bigint(20) NOT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `res_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `coffees`
--

INSERT INTO `coffees` (`id`, `image`, `name`, `price`, `res_id`) VALUES
(1, 'https://iili.io/J3V9tlS.png', 'Americano11111', 30, 1),
(2, 'https://iili.io/J3V9Zf2.png', 'Capuchino', 25, 1),
(3, 'https://iili.io/J3V9Lil.png', 'Latte', 32, 1),
(4, 'https://iili.io/J3V9sV4.png', 'Flat White', 25, 1),
(5, 'https://iili.io/J3V9ixf.png', 'Raf', 30, 1),
(6, 'https://iili.io/J3V96DG.png', 'Espresso', 24, 1),
(7, 'https://iili.io/J3N4fQp.png', 'Vanilla', 30, 2),
(8, 'https://iili.io/J3N4KjR.png', 'White Mocha', 25, 2),
(9, 'https://iili.io/J3N4FTv.png', 'Mocha', 32, 2),
(10, 'https://iili.io/J3N4dva.png', 'Iced Coffee', 25, 2),
(11, 'https://iili.io/J3N4BCN.png', 'Machiato', 30, 2),
(12, 'https://iili.io/J3N42yJ.png', 'Milk Coffee', 24, 2),
(13, 'https://iili.io/J3V9Zf2.png', 'Capuchino', 25, 3),
(14, 'https://iili.io/J3V9Lil.png', 'Latte', 32, 3),
(15, 'https://iili.io/J3N4fQp.png', 'Vanilla', 30, 3),
(16, 'https://iili.io/J3N4KjR.png', 'White Mocha', 25, 3),
(17, 'https://iili.io/J3N4FTv.png', 'Mocha', 32, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `milks`
--

CREATE TABLE `milks` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `coffee_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `milks`
--

INSERT INTO `milks` (`id`, `name`, `coffee_id`) VALUES
(1, 'Cow\'s', NULL),
(2, 'Lactose-free', NULL),
(3, 'Skimmed', NULL),
(4, 'Vegetable', NULL),
(5, 'Almond', 2),
(6, 'Oat', 2),
(7, 'Skim', 2),
(8, 'Cashew', 2),
(9, 'Skimmed', 3),
(10, 'Oat', 3),
(11, 'Vegetable', 3),
(12, 'Cashew', 3),
(13, 'Skimmed', 4),
(14, 'Oat', 4),
(15, 'Vegetable', 4),
(16, 'Cashew', 4),
(17, 'Skimmed', 5),
(18, 'Oat', 5),
(19, 'Vegetable', 5),
(20, 'Cashew', 5),
(21, 'Skimmed', 6),
(22, 'Oat', 6),
(23, 'Vegetable', 6),
(24, 'Cashew', 6),
(25, 'Skimmed', 7),
(26, 'Oat', 7),
(27, 'Vegetable', 7),
(28, 'Cashew', 7),
(29, 'Skimmed', 8),
(30, 'Oat', 8),
(31, 'Vegetable', 8),
(32, 'Cashew', 8),
(33, 'Skimmed', 9),
(34, 'Oat', 9),
(35, 'Vegetable', 9),
(36, 'Cashew', 9),
(37, 'Skimmed', 10),
(38, 'Oat', 10),
(39, 'Vegetable', 10),
(40, 'Cashew', 10),
(41, 'Skimmed', 11),
(42, 'Oat', 11),
(43, 'Vegetable', 11),
(44, 'Cashew', 11),
(45, 'Skimmed', 12),
(46, 'Oat', 12),
(47, 'Vegetable', 12),
(48, 'Cashew', 12),
(49, 'Skimmed', 13),
(50, 'Oat', 13),
(51, 'Vegetable', 13),
(52, 'Cashew', 13),
(53, 'Skimmed', 14),
(54, 'Oat', 14),
(55, 'Vegetable', 14),
(56, 'Cashew', 14),
(57, 'Skimmed', 15),
(58, 'Oat', 15),
(59, 'Vegetable', 15),
(60, 'Cashew', 15),
(61, 'Skimmed', 16),
(62, 'Oat', 16),
(63, 'Vegetable', 16),
(64, 'Cashew', 16),
(65, 'Skimmed', 17),
(66, 'Oat', 17),
(67, 'Vegetable', 17),
(68, 'Cashew', 17),
(69, 'Skimmed', NULL),
(70, 'Oat', NULL),
(71, 'Vegetable', NULL),
(72, 'Cashew', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL,
  `total` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_details`
--

CREATE TABLE `order_details` (
  `id` bigint(20) NOT NULL,
  `milk` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `syrup` varchar(255) DEFAULT NULL,
  `coffee_id` bigint(20) DEFAULT NULL,
  `order_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `restaurants`
--

CREATE TABLE `restaurants` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `restaurants`
--

INSERT INTO `restaurants` (`id`, `name`) VALUES
(1, 'Starbucks'),
(2, 'MC Coffee'),
(3, 'Peet\'s Coffee');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `syrups`
--

CREATE TABLE `syrups` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `coffee_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `syrups`
--

INSERT INTO `syrups` (`id`, `name`, `coffee_id`) VALUES
(1, 'Amaretto', 3),
(2, 'Coconut', 3),
(3, 'Vanilla', 3),
(4, 'Caramel', 3),
(5, 'Peppermint', 2),
(6, 'Coconut', 2),
(7, 'Hazelnut', 2),
(8, 'Caramel', 2),
(9, 'Hazelnut', NULL),
(10, 'Peppermint', NULL),
(11, 'Irish Cream', NULL),
(12, 'Raspberry', NULL),
(13, 'Amaretto', 4),
(14, 'Coconut', 4),
(15, 'Vanilla', 4),
(16, 'Caramel', 4),
(17, 'Amaretto', 5),
(18, 'Coconut', 5),
(19, 'Vanilla', 5),
(20, 'Caramel', 5),
(21, 'Amaretto', 6),
(22, 'Coconut', 6),
(23, 'Vanilla', 6),
(24, 'Caramel', 6),
(25, 'Amaretto', 7),
(26, 'Coconut', 7),
(27, 'Vanilla', 7),
(28, 'Caramel', 7),
(29, 'Amaretto', 8),
(30, 'Coconut', 8),
(31, 'Vanilla', 8),
(32, 'Caramel', 8),
(33, 'Amaretto', 9),
(34, 'Coconut', 9),
(35, 'Vanilla', 9),
(36, 'Caramel', 9),
(37, 'Amaretto', 10),
(38, 'Coconut', 10),
(39, 'Vanilla', 10),
(40, 'Caramel', 10),
(41, 'Amaretto', 11),
(42, 'Coconut', 11),
(43, 'Vanilla', 11),
(44, 'Caramel', 11),
(45, 'Amaretto', 12),
(46, 'Coconut', 12),
(47, 'Vanilla', 12),
(48, 'Caramel', 12),
(49, 'Amaretto', 13),
(50, 'Coconut', 13),
(51, 'Vanilla', 13),
(52, 'Caramel', 13),
(53, 'Amaretto', 14),
(54, 'Coconut', 14),
(55, 'Vanilla', 14),
(56, 'Caramel', 14),
(57, 'Amaretto', 15),
(58, 'Coconut', 15),
(59, 'Vanilla', 15),
(60, 'Caramel', 15),
(61, 'Amaretto', 16),
(62, 'Coconut', 16),
(63, 'Vanilla', 16),
(64, 'Caramel', 16),
(65, 'Amaretto', 17),
(66, 'Coconut', 17),
(67, 'Vanilla', 17),
(68, 'Caramel', 17),
(69, 'Amaretto', NULL),
(70, 'Coconut', NULL),
(71, 'Vanilla', NULL),
(72, 'Caramel', NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `coffees`
--
ALTER TABLE `coffees`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKf8e5x8chjteolk8bxfn5i5qbm` (`res_id`);

--
-- Chỉ mục cho bảng `milks`
--
ALTER TABLE `milks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKof33sjfdt2sw4y4f8rmk9pqlc` (`coffee_id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKlqyey5k4krki7tfy33qa4gyq4` (`coffee_id`),
  ADD KEY `FKjyu2qbqt8gnvno9oe9j2s2ldk` (`order_id`);

--
-- Chỉ mục cho bảng `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `syrups`
--
ALTER TABLE `syrups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKrkebjr8gpmyqtmp4kfo2qobnm` (`coffee_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `coffees`
--
ALTER TABLE `coffees`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT cho bảng `milks`
--
ALTER TABLE `milks`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `syrups`
--
ALTER TABLE `syrups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `coffees`
--
ALTER TABLE `coffees`
  ADD CONSTRAINT `FKf8e5x8chjteolk8bxfn5i5qbm` FOREIGN KEY (`res_id`) REFERENCES `restaurants` (`id`);

--
-- Các ràng buộc cho bảng `milks`
--
ALTER TABLE `milks`
  ADD CONSTRAINT `FKof33sjfdt2sw4y4f8rmk9pqlc` FOREIGN KEY (`coffee_id`) REFERENCES `coffees` (`id`);

--
-- Các ràng buộc cho bảng `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `FKjyu2qbqt8gnvno9oe9j2s2ldk` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `FKlqyey5k4krki7tfy33qa4gyq4` FOREIGN KEY (`coffee_id`) REFERENCES `coffees` (`id`);

--
-- Các ràng buộc cho bảng `syrups`
--
ALTER TABLE `syrups`
  ADD CONSTRAINT `FKrkebjr8gpmyqtmp4kfo2qobnm` FOREIGN KEY (`coffee_id`) REFERENCES `coffees` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
