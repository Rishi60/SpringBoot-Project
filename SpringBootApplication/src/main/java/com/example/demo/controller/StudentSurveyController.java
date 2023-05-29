package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.StudentSurvey;
import com.example.demo.service.StudentSurveyService;

@RestController
@CrossOrigin()
@RequestMapping("/api/studentSurvey")
public class StudentSurveyController {

	private StudentSurveyService studentSurveyService;

	public StudentSurveyController(StudentSurveyService studentSurveyService) {
		super();
		this.studentSurveyService = studentSurveyService;
	}
	
	@PostMapping
	public ResponseEntity<StudentSurvey> saveStudentSurvey(@RequestBody StudentSurvey studentSurvey)
	{
		System.out.println(studentSurvey.getFirstName());
		return new ResponseEntity<StudentSurvey>(studentSurveyService.saveSurvey(studentSurvey),null,HttpStatus.CREATED);
		
	}
	
	@GetMapping
	public List<StudentSurvey> getAllSurveys()
	{
		return studentSurveyService.getAllSurveys();
	
	}
	
}
