package com.example.demo.service;

import java.util.List;

import com.example.demo.models.StudentSurvey;



public interface StudentSurveyService {

	StudentSurvey saveSurvey(StudentSurvey studentsurvey);
	List<StudentSurvey> getAllSurveys();
}
