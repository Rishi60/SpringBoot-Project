package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.StudentSurvey;


public interface StudentSurveyRepository extends JpaRepository<StudentSurvey,Long>{
	

}
