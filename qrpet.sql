-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 17-Jun-2019 às 00:26
-- Versão do servidor: 10.1.40-MariaDB
-- versão do PHP: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qrpet`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `pets`
--

CREATE TABLE `pets` (
  `id` int(11) NOT NULL,
  `name` varchar(123) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `raca` varchar(123) COLLATE utf8mb4_unicode_ci NOT NULL,
  `peso` varchar(123) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cor` varchar(123) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(123) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descricao` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vacinas` varchar(400) COLLATE utf8mb4_unicode_ci NOT NULL,
  `data_nasc` date NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `pets`
--

INSERT INTO `pets` (`id`, `name`, `user_id`, `raca`, `peso`, `cor`, `avatar`, `descricao`, `vacinas`, `data_nasc`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Tob', 1, 'Yorkshire', '23', 'Marrom e Branco', 'dd685808e4513daa734fe9a53af26889.png', 'Cachorro legal', 'Tomou todas rs', '2014-01-11', 0, '2019-06-09 02:44:32', '2019-06-09 02:44:32'),
(2, 'Filipe', 1, 'kkk', '23', 'dsadas', 'cfef0843cc0609a52055804685668aba.jpg', 'sadsa', 'nenhuma', '1998-11-11', 1, '2019-06-09 03:00:30', '2019-06-09 03:00:48'),
(3, 'Bob', 2, 'Sei la', '20', 'Branco', '6cdce1a09011110e11ff5a3c48f239f3.jpg', 'Cachorro bonito kkkkkkkkkkkk', 'tomo todas', '2018-01-11', 0, '2019-06-09 03:42:41', '2019-06-09 03:42:41');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20190604004414-create-users.js'),
('20190608170147-pet.js');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(123) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(123) COLLATE utf8mb4_unicode_ci NOT NULL,
  `endereco` varchar(123) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cidade` varchar(123) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cpf` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` varchar(123) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefone` varchar(123) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password_hash` varchar(123) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `endereco`, `cidade`, `cpf`, `estado`, `telefone`, `password_hash`, `created_at`, `updated_at`) VALUES
(1, 'Gumb', 'a@a.a', 'dasd asdsa', 'fdsada ', '0984154855', 'dasdsadsa', '321321', '$2a$08$y5UqLl80rfcPT8pFg3jwo.iKmmNklCAGC/F3bDi1XwGJo/uElx9ea', '2019-06-08 18:21:07', '2019-06-08 18:21:07'),
(2, 'bumg', 'b@b.b', 'dfsadfsa', 'dsad', '516156', 'dsadsa', '6451132', '$2a$08$DJRryukPv0e2oS1QuL59X.ff5Hp89mD9wIERurN9nEyW2GDX3noKS', '2019-06-08 21:42:38', '2019-06-08 21:42:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pets`
--
ALTER TABLE `pets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pets`
--
ALTER TABLE `pets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `pets`
--
ALTER TABLE `pets`
  ADD CONSTRAINT `pets_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
