package com.example.demo.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.models.StudentSurvey;
import com.example.demo.repository.StudentSurveyRepository;
import com.example.demo.service.StudentSurveyService;

@Service
public class StudentSurveyServiceImpl implements StudentSurveyService{
	private StudentSurveyRepository studentSurveyRepository;
	
	public StudentSurveyServiceImpl(StudentSurveyRepository studentSurveyRepository) {
		super();
		this.studentSurveyRepository = studentSurveyRepository;
	}

	@Override
	public StudentSurvey saveSurvey(StudentSurvey studentsurvey) {
		// TODO Auto-generated method stub
		return studentSurveyRepository.save(studentsurvey);
	}

	@Override
	public List<StudentSurvey> getAllSurveys() {
		// TODO Auto-generated method stub
		return studentSurveyRepository.findAll();
	}

}
