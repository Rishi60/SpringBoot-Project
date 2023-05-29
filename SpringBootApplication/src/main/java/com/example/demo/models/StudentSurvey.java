package com.example.demo.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="studentSurvey")
public class StudentSurvey {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long surveyId;
	
	
	private String firstName;
	private String lastName;
	private String address;
	private String city;
	private String state;
	private int zip;
	private String telephone;
	private String email;
	private Date dateOfSurvey;
	
	private String [] mostLiked;
	private String intrestInUni;
	private String recommendUni;
	
	

}
