package com.devJournal.backend.service;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.devJournal.backend.repository.DailyLogRepository;
import com.devJournal.backend.entity.DailyLog;

@Service
public class DailyLogService {

    private DailyLogRepository dailyLogRepository;

    public DailyLogService(DailyLogRepository dailyLogRepository) {
        this.dailyLogRepository = dailyLogRepository;
    }

    public List<DailyLog> findAll() {
        return dailyLogRepository.findAll();
    }

    public Optional<DailyLog> findById(Long id) {
        return dailyLogRepository.findById(id);
    }

    public DailyLog save(DailyLog dailyLog) {
        return dailyLogRepository.save(dailyLog);
    }

    public void deleteById(Long id){
        dailyLogRepository.deleteById(id);
    }

}
