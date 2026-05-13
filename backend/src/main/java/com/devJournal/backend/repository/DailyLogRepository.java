package com.devJournal.backend.repository;
import com.devJournal.backend.entity.DailyLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DailyLogRepository extends JpaRepository<DailyLog, Long> {


}
