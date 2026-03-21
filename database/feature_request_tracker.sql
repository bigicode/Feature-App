CREATE TABLE `feature_requests` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(120) NOT NULL,
  `description` TEXT NOT NULL,
  `priority` ENUM('LOW', 'MEDIUM', 'HIGH') NOT NULL DEFAULT 'MEDIUM',
  `review_status` ENUM('PENDING', 'ACCEPTED', 'DECLINED') NOT NULL DEFAULT 'PENDING',
  `delivery_status` ENUM('BACKLOG', 'IN_PROGRESS', 'COMPLETED') NOT NULL DEFAULT 'BACKLOG',
  `submitter_name` VARCHAR(100) NULL,
  `submitter_email` VARCHAR(191) NULL,
  `admin_notes` TEXT NULL,
  `declined_reason` TEXT NULL,
  `reviewed_at` DATETIME(3) NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  INDEX `feature_requests_review_status_idx` (`review_status`),
  INDEX `feature_requests_delivery_status_idx` (`delivery_status`),
  INDEX `feature_requests_priority_idx` (`priority`),
  INDEX `feature_requests_created_at_idx` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `admin_users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(191) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `admin_users_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `admin_users` (`name`, `email`, `password_hash`)
VALUES (
  'System Admin',
  'admin@featuretrack.local',
  '$2b$10$KxEA7nhTauuFN2JqfE9Wf.bWub.Lq1oK2WaBqE3W5vqMoVYXSQUDa'
)
ON DUPLICATE KEY UPDATE
  `name` = VALUES(`name`),
  `password_hash` = VALUES(`password_hash`);
