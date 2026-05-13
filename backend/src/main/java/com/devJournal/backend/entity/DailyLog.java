package com.devJournal.backend.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "daily_logs")
public class DailyLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "log_date", nullable = false)
    private LocalDate logDate;

    @Column(nullable = false)
    private String title;

    @Column(name = "worked_on", nullable = false, columnDefinition = "TEXT")
    private String workedOn;

    @Column(name = "tasks_completed", columnDefinition = "TEXT")
    private String tasksCompleted;

    @Column(columnDefinition = "TEXT")
    private String blockers;

    @Column(columnDefinition = "TEXT")
    private String difficulties;

    @Column(name = "things_learned", columnDefinition = "TEXT")
    private String thingsLearned;

    @Column(name = "tools_used", columnDefinition = "TEXT")
    private String toolsUsed;

    @Column(name = "notes_for_tomorrow", columnDefinition = "TEXT")
    private String notesForTomorrow;

    @Column(name = "confidence_rating")
    private Integer confidenceRating;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    public Long getId() { return id; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public LocalDate getLogDate() { return logDate; }
    public void setLogDate(LocalDate logDate) { this.logDate = logDate; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getWorkedOn() { return workedOn; }
    public void setWorkedOn(String workedOn) { this.workedOn = workedOn; }

    public String getTasksCompleted() { return tasksCompleted; }
    public void setTasksCompleted(String tasksCompleted) { this.tasksCompleted = tasksCompleted; }

    public String getBlockers() { return blockers; }
    public void setBlockers(String blockers) { this.blockers = blockers; }

    public String getDifficulties() { return difficulties; }
    public void setDifficulties(String difficulties) { this.difficulties = difficulties; }

    public String getThingsLearned() { return thingsLearned; }
    public void setThingsLearned(String thingsLearned) { this.thingsLearned = thingsLearned; }

    public String getToolsUsed() { return toolsUsed; }
    public void setToolsUsed(String toolsUsed) { this.toolsUsed = toolsUsed; }

    public String getNotesForTomorrow() { return notesForTomorrow; }
    public void setNotesForTomorrow(String notesForTomorrow) { this.notesForTomorrow = notesForTomorrow; }

    public Integer getConfidenceRating() { return confidenceRating; }
    public void setConfidenceRating(Integer confidenceRating) { this.confidenceRating = confidenceRating; }

    public LocalDateTime getCreatedAt() { return createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
}