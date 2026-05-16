package com.devJournal.backend.controller;

import com.devJournal.backend.entity.DailyLog;
import com.devJournal.backend.service.DailyLogService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/logs")
public class DailyLogController {
    private final DailyLogService dailyLogService;

    public DailyLogController(DailyLogService dailyLogService) {
        this.dailyLogService = dailyLogService;
    }

    @GetMapping
    public List<DailyLog> getAllDailyLogs(){
        return dailyLogService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<DailyLog> getDailyLogById(@PathVariable Long id){
        return dailyLogService.findById(id);
    }

    @PostMapping()
    public DailyLog saveDailyLog(@RequestBody DailyLog dailyLog){
        return dailyLogService.save(dailyLog);
    }

    @DeleteMapping("/{id}")
    public void deleteDailyLogById(@PathVariable Long id){
        dailyLogService.deleteById(id);
    }






}
