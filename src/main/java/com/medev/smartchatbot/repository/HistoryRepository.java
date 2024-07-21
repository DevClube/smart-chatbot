package com.medev.smartchatbot.repository;

import com.medev.smartchatbot.entites.History;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoryRepository extends JpaRepository<History, Long> {
}
