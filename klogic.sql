-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2022 at 07:51 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `klogic`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `courseID` int(11) NOT NULL,
  `course_code` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `credit` int(11) NOT NULL,
  `teacherID` varchar(255) NOT NULL,
  `course_day` varchar(255) NOT NULL,
  `course_start` time NOT NULL,
  `couese_end` time NOT NULL,
  `semester` int(11) NOT NULL,
  `section` int(11) NOT NULL,
  `course_prv` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`courseID`, `course_code`, `subject`, `credit`, `teacherID`, `course_day`, `course_start`, `couese_end`, `semester`, `section`, `course_prv`) VALUES
(10101, '040203101', 'MATHEMATICS I', 3, '04-NBK', 'M', '09:00:00', '12:00:00', 1, 1, ''),
(10102, '040203101', 'MATHEMATICS I', 3, '04-PJT', 'M', '09:00:00', '12:00:00', 1, 2, ''),
(10103, '040613101', 'FUNDAMENTAL OF COMPUTER SCIE', 3, '04-NSD', 'F', '09:00:00', '12:00:00', 1, 1, ''),
(10104, '040613101', 'FUNDAMENTAL OF COMPUTER SCIE', 3, '04-NSD', 'M', '09:00:00', '12:00:00', 1, 2, ''),
(10105, '040313016', 'PHYSICS IN DAILY LIFE', 3, '04-WRW', 'W', '13:00:00', '16:00:00', 1, 1, ''),
(10106, '040613102', 'COMPUTER PROGRAMMING I', 3, '04-CHR', 'M', '13:00:00', '15:00:00', 1, 1, ''),
(10107, '040613102', 'COMPUTER PROGRAMMING I', 3, '04-KSB', 'M', '13:00:00', '15:00:00', 1, 2, ''),
(10108, '040613181', 'DIGITAL CIRCUIT DESIGN', 3, '04-NSN', 'T', '13:00:00', '16:00:00', 1, 1, ''),
(10109, '040613181', 'DIGITAL CIRCUIT DESIGN', 3, '04-ENS', 'T', '13:00:00', '16:00:00', 1, 2, ''),
(10110, '080103001', 'ENGLISH I', 3, '08-MTP', 'H', '13:00:00', '16:00:00', 1, 1, ''),
(10111, '080103001', 'ENGLISH I', 3, '08-MTP', 'F', '13:00:00', '16:00:00', 1, 2, ''),
(10112, '080203905', 'ECONOMY AND EVERYDAY LIFE', 3, '08-PAS', 'W', '09:00:00', '12:00:00', 1, 1, ''),
(10113, '080203905', 'ECONOMY AND EVERYDAY LIFE', 3, '08-OTS', 'W', '09:00:00', '12:00:00', 1, 2, ''),
(10114, '040203102', 'MATHEMATICS II', 3, '04-NBK', 'M', '09:00:00', '12:00:00', 2, 1, '040203101'),
(10115, '040203102', 'MATHEMATICS II', 3, '04-NBK', 'T', '09:00:00', '12:00:00', 2, 2, '040203101'),
(10116, '040613121', 'COMPUTER PROGRAMMING II', 3, '04-SSP', 'M', '13:00:00', '15:00:00', 2, 1, '040613102/040613101'),
(10117, '040613121', 'COMPUTER PROGRAMMING II', 3, '04-SSP', 'H', '09:00:00', '12:00:00', 2, 2, '040613102/040613101'),
(10118, '040613191', 'DISCRETE MATHEMATICS FOR COM', 3, '04-CHR', 'W', '09:00:00', '12:00:00', 2, 1, ''),
(10119, '040613191', 'DISCRETE MATHEMATICS FOR COM', 3, '04-CHR', 'H', '13:00:00', '16:00:00', 2, 2, ''),
(10120, '040433002', 'FOOD IN DAILY LIFE', 3, '04-SUK', 'T', '13:00:00', '16:00:00', 2, 1, ''),
(10121, '040613182', 'DIGITAL AND LOGIC SYSTEMS', 3, '04-NSN', 'W', '13:00:00', '16:00:00', 2, 1, ''),
(10122, '040613182', 'DIGITAL AND LOGIC SYSTEMS', 3, '04-ENS', 'W', '13:00:00', '16:00:00', 2, 2, ''),
(10123, '080103002', 'ENGLISH II', 3, '03-NASIN', 'F', '09:00:00', '12:00:00', 2, 1, '080103001'),
(10124, '080103002', 'ENGLISH II', 3, '03-NASIN', 'F', '13:00:00', '16:00:00', 2, 2, '080103001'),
(10125, '040203201', 'DIFFERENTIAL EQUATIONS', 3, '04-KST', 'H', '13:00:00', '16:00:00', 3, 1, '040203102'),
(10126, '040203201', 'DIFFERENTIAL EQUATIONS', 3, '04-AJK', 'H', '13:00:00', '16:00:00', 3, 2, '040203102'),
(10127, '040413001', 'BIOLOGY IN DAILY LIFE', 3, '04-VDP', 'W', '09:00:00', '12:00:00', 3, 1, ''),
(10128, '040503011', 'STATISTICS FOR ENGINEERS', 3, '04-CPC', 'M', '09:00:00', '12:00:00', 3, 1, ''),
(10129, '040503011', 'STATISTICS FOR ENGINEERS', 3, '04-CPC', 'M', '13:00:00', '16:00:00', 3, 2, ''),
(10130, '040613202', 'DATA STRUCTURE AND ALGORITHM', 3, '04-ADP', 'H', '09:00:00', '12:00:00', 3, 1, '040613121'),
(10131, '040613202', 'DATA STRUCTURE AND ALGORITHM', 3, '04-SRS', 'H', '09:00:00', '12:00:00', 3, 2, '040613121'),
(10132, '040613202', 'DATA STRUCTURE AND ALGORITHM', 3, '04-CHR', 'H', '09:00:00', '12:00:00', 3, 3, '040613121'),
(10133, '040613222', 'OBJECT-ORIENTED PROGRAMMING', 3, '04-SWK', 'T', '13:00:00', '15:00:00', 3, 1, '040613121'),
(10134, '040613222', 'OBJECT-ORIENTED PROGRAMMING', 3, '04-SSP', 'T', '13:00:00', '15:00:00', 3, 2, '040613121'),
(10135, '080103030', 'ACADEMIC READING', 3, '08-NAPAD', 'F', '09:00:00', '12:00:00', 3, 1, ''),
(10136, '080103030', 'ACADEMIC READING', 3, '08-NAPAD', 'F', '13:00:00', '16:00:00', 3, 2, ''),
(10137, '080303515', 'WALK & RUN FOR HEALTH', 1, '08-RAYIN', 'H', '17:00:00', '19:00:00', 3, 1, ''),
(10138, '080303515', 'WALK & RUN FOR HEALTH', 1, '08-RAYIN', 'F', '17:00:00', '19:00:00', 3, 2, ''),
(10139, '080303517', 'FITNESS & WEIGHT TRAINING', 1, '08-CHSAL', 'H', '10:00:00', '12:00:00', 3, 1, ''),
(10140, '080303517', 'FITNESS & WEIGHT TRAINING', 1, '08-CHSAL', 'T', '10:00:00', '12:00:00', 3, 2, '');

-- --------------------------------------------------------

--
-- Table structure for table `grade`
--

CREATE TABLE `grade` (
  `gradeID` int(11) NOT NULL,
  `resultID` int(11) NOT NULL,
  `result` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `grade`
--

INSERT INTO `grade` (`gradeID`, `resultID`, `result`) VALUES
(1, 200001, 'A'),
(2, 200002, 'A'),
(3, 200003, 'A'),
(4, 200004, 'B'),
(5, 200005, 'A'),
(6, 200006, 'A'),
(7, 200007, 'C'),
(8, 200008, 'B+'),
(9, 200009, 'D+'),
(10, 200010, 'D'),
(11, 200011, 'B'),
(12, 200012, 'A'),
(13, 200013, 'A'),
(14, 200014, 'B+'),
(15, 200015, 'A'),
(16, 200016, 'C'),
(17, 200017, 'A'),
(18, 200018, 'A'),
(19, 200019, 'B'),
(20, 200020, 'B+'),
(21, 200021, 'D'),
(22, 200022, 'A'),
(23, 200023, 'B'),
(24, 200024, 'A'),
(25, 200025, 'A'),
(26, 200026, 'D'),
(27, 200027, 'B+'),
(28, 200028, 'A'),
(29, 200029, 'B'),
(30, 200030, 'D+'),
(31, 200031, 'C'),
(32, 200032, 'A'),
(33, 200033, 'C'),
(34, 200034, 'B+'),
(35, 200035, 'C+'),
(36, 200036, 'A'),
(37, 200037, 'D'),
(38, 200038, 'A'),
(39, 200039, 'B+'),
(40, 200040, 'C+'),
(41, 200041, 'D'),
(42, 200042, 'B+'),
(43, 200043, 'C+'),
(44, 200044, 'B+'),
(45, 200045, 'C'),
(46, 200046, 'B+'),
(47, 200047, 'C'),
(48, 200048, 'B+'),
(49, 200049, 'B+'),
(50, 200050, 'C'),
(51, 200051, 'A'),
(52, 200052, 'D+'),
(53, 200053, 'B+'),
(54, 200054, 'B'),
(55, 200055, 'A'),
(56, 200056, 'C+'),
(57, 200057, 'B'),
(58, 200058, 'B+'),
(59, 200059, 'A'),
(60, 200060, 'A'),
(61, 200061, 'C'),
(62, 200062, 'A'),
(63, 200063, 'D'),
(64, 200064, 'A'),
(65, 200065, 'D'),
(66, 200066, 'B+'),
(67, 200067, 'A'),
(68, 200068, 'B+'),
(69, 200069, 'D'),
(70, 200070, 'A');

-- --------------------------------------------------------

--
-- Table structure for table `register_result`
--

CREATE TABLE `register_result` (
  `resultID` int(11) NOT NULL,
  `stdID` varchar(13) NOT NULL,
  `courseID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `register_result`
--

INSERT INTO `register_result` (`resultID`, `stdID`, `courseID`) VALUES
(200001, '6204062630011', 10101),
(200002, '6204062630011', 10103),
(200003, '6204062630011', 10105),
(200004, '6204062630011', 10106),
(200005, '6204062630011', 10108),
(200006, '6204062630011', 10110),
(200007, '6204062630011', 10112),
(200008, '6204062630012', 10102),
(200009, '6204062630012', 10104),
(200010, '6204062630012', 10105),
(200011, '6204062630012', 10107),
(200012, '6204062630012', 10109),
(200013, '6204062630012', 10111),
(200014, '6204062630012', 10113),
(200015, '6204062630013', 10101),
(200016, '6204062630013', 10103),
(200017, '6204062630013', 10105),
(200018, '6204062630013', 10106),
(200019, '6204062630013', 10108),
(200020, '6204062630013', 10110),
(200021, '6204062630013', 10112),
(200022, '6204062630014', 10102),
(200023, '6204062630014', 10104),
(200024, '6204062630014', 10105),
(200025, '6204062630014', 10107),
(200026, '6204062630014', 10109),
(200027, '6204062630014', 10111),
(200028, '6204062630014', 10113),
(200029, '6204062630015', 10101),
(200030, '6204062630015', 10103),
(200031, '6204062630015', 10105),
(200032, '6204062630015', 10106),
(200033, '6204062630015', 10108),
(200034, '6204062630015', 10110),
(200035, '6204062630015', 10112),
(200036, '6204062630016', 10102),
(200037, '6204062630016', 10104),
(200038, '6204062630016', 10105),
(200039, '6204062630016', 10107),
(200040, '6204062630016', 10109),
(200041, '6204062630016', 10111),
(200042, '6204062630016', 10113),
(200043, '6204062630017', 10101),
(200044, '6204062630017', 10103),
(200045, '6204062630017', 10105),
(200046, '6204062630017', 10106),
(200047, '6204062630017', 10108),
(200048, '6204062630017', 10110),
(200049, '6204062630017', 10112),
(200050, '6204062630018', 10102),
(200051, '6204062630018', 10104),
(200052, '6204062630018', 10105),
(200053, '6204062630018', 10107),
(200054, '6204062630018', 10109),
(200055, '6204062630018', 10111),
(200056, '6204062630018', 10113),
(200057, '6204062630019', 10101),
(200058, '6204062630019', 10103),
(200059, '6204062630019', 10105),
(200060, '6204062630019', 10106),
(200061, '6204062630019', 10108),
(200062, '6204062630019', 10110),
(200063, '6204062630019', 10112),
(200064, '6204062630020', 10102),
(200065, '6204062630020', 10104),
(200066, '6204062630020', 10105),
(200067, '6204062630020', 10107),
(200068, '6204062630020', 10109),
(200069, '6204062630020', 10111),
(200070, '6204062630020', 10113);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `stdID` varchar(13) NOT NULL,
  `name` varchar(255) NOT NULL,
  `sex` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `personalID` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`stdID`, `name`, `sex`, `birthday`, `personalID`) VALUES
('6204062630011', 'เอ บี', 'ชาย', '2000-07-15', '1000153480120'),
('6204062630012', 'ทีที บีซี', 'ชาย', '2000-12-16', '1000153480120'),
('6204062630013', 'สุขใจ เรียนดี', 'หญิง', '2001-05-01', '1000153480121'),
('6204062630014', 'สมใจ มีสุข', 'หญิง', '2000-04-08', '1000153480122'),
('6204062630015', 'เลิศศรี มีชัย', 'ชาย', '1999-12-31', '1000153480123'),
('6204062630016', 'เจน วิชา', 'หญิง', '2001-02-14', '1000153480124'),
('6204062630017', 'มณี แสงสวย', 'หญิง', '2000-07-21', '1000153480125'),
('6204062630018', 'แสนดี สุวรรณพ', 'หญิง', '2001-01-06', '1000153480126'),
('6204062630019', 'สุขประเสริฐ ยิ่งศรี', 'ชาย', '2000-06-23', '1000153480127'),
('6204062630020', 'มีชัย วงศรี', 'ชาย', '1999-12-01', '1000153480128');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `teacherID` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`teacherID`, `name`, `password`, `role`) VALUES
('03-NASIN', 'ณัฐวดี สินพัฒนาวงศ์', 'admin', 'teacher'),
('04-ADP', 'อัครา ประโยชน์', 'admin', 'boss'),
('04-AJK', 'อนุชิต จิตพัฒนกุล', 'admin', 'teacher'),
('04-CHR', 'เฉียบวุฒิ รัตนวิไลสกุล', 'admin', 'teacher'),
('04-CPC', 'ชนาพันธุ์ ชนาเนตร', 'admin', 'teacher'),
('04-ENS', 'เอิญ สุริยะฉาย', 'admin', 'teacher'),
('04-KSB', 'กอบเกียรติ สระอุบล', 'admin', 'teacher'),
('04-KST', 'กนกวรรณ สิทธิเถกิงเกียรติ', 'admin', 'teacher'),
('04-NBK', 'ณิชาภัทร พัฒนะรพีเลิศ', 'admin', 'teacher'),
('04-NSD', 'ณัฐวุฒิ สร้อยดอกสน', 'admin', 'teacher'),
('04-NSN', 'นนทกร สถิตานนท์', 'admin', 'teacher'),
('04-PJT', 'พงศ์พล จันทรี', 'admin', 'teacher'),
('04-SRS', 'สรร รัตนสัญญา', 'admin', 'teacher'),
('04-SSP', 'สถิตย์ ประสมพันธ์', 'admin', 'teacher'),
('04-SUK', 'สุธีรา ขันทพันธ์', 'admin', 'teacher'),
('04-SWK', 'สุวัจชัย กมลสันติโรจน์', 'admin', 'teacher'),
('04-VDP', 'วิชัย ดำรงโภคภัณฑ์', 'admin', 'teacher'),
('04-WRW', 'วรวิทย์ รัตนวงษ์', 'admin', 'teacher'),
('08-CHSAL', 'ไชโย ซาลัง', 'admin', 'teacher'),
('08-MTP', 'มนทิรา ประชาฤทธิ์ภักดี', 'admin', 'teacher'),
('08-NAPAD', 'นาถจารีย์ ผดุงเลิศ', 'admin', 'teacher'),
('08-OTS', 'อรษา ตันติยะวงศ์ษา', 'admin', 'teacher'),
('08-PAS', 'ภาตย์ สังข์แก้ว', 'admin', 'teacher'),
('08-RAYIN', 'รัฐธนินท์ ยิ่งศิริ', 'admin', 'teacher');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `personalID` varchar(13) NOT NULL,
  `stdID` varchar(13) NOT NULL,
  `new_password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`personalID`, `stdID`, `new_password`) VALUES
('1000153480120', '6204062630011', 'a11111'),
('1000153480121', '6204062630012', 'abcde'),
('1000153480122', '6204062630013', 'a11111'),
('1000153480123', '6204062630014', '5467'),
('1000153480124', '6204062630015', '15789'),
('1000153480125', '6204062630016', '02awwf'),
('1000153480126', '6204062630017', 'ffffgs'),
('1000153480127', '6204062630018', 'ipdjg'),
('1000153480128', '6204062630019', 'sqofkei'),
('1000153480129', '6204062630020', 'splier'),
('root1234', 'admin', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`courseID`),
  ADD KEY `teacherID` (`teacherID`);

--
-- Indexes for table `grade`
--
ALTER TABLE `grade`
  ADD PRIMARY KEY (`gradeID`),
  ADD KEY `resultID` (`resultID`);

--
-- Indexes for table `register_result`
--
ALTER TABLE `register_result`
  ADD PRIMARY KEY (`resultID`),
  ADD KEY `stdID` (`stdID`),
  ADD KEY `courseID` (`courseID`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`stdID`),
  ADD KEY `personalID` (`personalID`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`teacherID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`personalID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `courseID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10141;

--
-- AUTO_INCREMENT for table `grade`
--
ALTER TABLE `grade`
  MODIFY `gradeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `register_result`
--
ALTER TABLE `register_result`
  MODIFY `resultID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=200071;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`personalID`) REFERENCES `user` (`personalID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
