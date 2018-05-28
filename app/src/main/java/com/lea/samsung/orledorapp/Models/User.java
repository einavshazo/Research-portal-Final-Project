package com.lea.samsung.orledorapp.Models;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * Created by USER on 5/6/2016.
 */
public class User {
    private String _userName;
    private String _password;
    private String _firstName;
    private String _department;
    private String _nativeLanguage;
    private String _pastEmployment;
    private String _hobbies;
    private String _q1;
    private String _q2;
    private String _q3;
    private String _q4;
    private String _q5;
    private String _q5a;
    private String _q6;
    private String _q6a;
    private String _q6b;
    private String _q7;
    private List<String> _medicalCondition;
    private String _medicalCondition_freeText;
    private String _userResearchName;
    private String _researchNumber;
    private Date _birthDate;
    private List<String> _childhoodLanguages;
    private List<BaseMultimedia> _userMultimedia;
    private boolean _isAdmin;
    private boolean _isResearcher; 
    private boolean _isResearchParticipant;       
	private HashMap likes;

    public User() {
        _userMultimedia = new ArrayList();
		likes = new HashMap();
    }

    public String get_userName() {
        return _userName;
    }

    public void set_userName(String _userName) {
        this._userName = _userName;
    }

    public String get_password() {
        return _password;
    }

    public void set_password(String _passwordl) {
        this._password = _passwordl;
    }

    public String get_firstName() {
        return _firstName;
    }

    public void set_firstName(String _firstName) {
        this._firstName = _firstName;
    }

    public String get_department() {
        return _department;
    }

    public void set_department(String _department) {
        this._department = _department;
    }

    public String get_nativeLanguage() {
        return _nativeLanguage;
    }

    public void set_nativeLanguage(String _nativeLanguage) {
        this._nativeLanguage = _nativeLanguage;
    }

    public String get_pastEmployment() {
        return _pastEmployment;
    }

    public void set_pastEmployment(String _pastEmployment) {
        this._pastEmployment = _pastEmployment;
    }

    public String get_hobbies() {
        return _hobbies;
    }

    public void set_hobbies(String _hobbies) {
        this._hobbies = _hobbies;
    }

    public String get_q1() {
        return _q1;
    }

    public void set_q1(String _q) {
        this._q1 = _q1;
    }

    public String get_q2() {
        return _q2;
    }

    public void set_q2(String _q2) {
        this._q2 = _q2;
    }

    public String get_q3() {
        return _q3;
    }

    public void set_q3(String _q3) {
        this._q3 = _q3;
    }

    public String get_q4() {
        return _q4;
    }

    public void set_q4(String _q4) {
        this._q4 = _q4;
    }

    public String get_q5() {
        return _q5;
    }

    public void set_q5(String _q5) {
        this._q5 = _q5;
    }

    public String get_q5a() {
        return _q5a;
    }

    public void set_q5a(String _q5a) {
        this._q5a = _q5a;
    }

    public String get_q6() {
        return _q6;
    }

    public void set_q6(String _q6) {
        this._q6 = _q6;
    }

    public String get_q6a() {
        return _q6a;
    }

    public void set_q6a(String _q6a) {
        this._q6a = _q6a;
    }

    public String get_q6b() {
        return _q6b;
    }

    public void set_q6b(String _q6b) {
        this._q = _q6b;
    }

    public String get_q7() {
        return _q7;
    }

    public void set_q7(String _q7) {
        this._q7 = _q7;
    }


    public List<String> get_medicalCondition() {
        return _medicalCondition;
    }

    public void set_medicalCondition(List<String> _medicalCondition) {
        this._medicalCondition = _medicalCondition;
    }

    public String get_medicalCondition_freeText() {
        return _medicalCondition_freeText;
    }

    public void set_medicalCondition_freeText(String _medicalCondition_freeText) {
        this._medicalCondition_freeText = _medicalCondition_freeText;
    }

    public String get_userResearchName() {
        return _userResearchName;
    }

    public void set_userResearchName(String _userResearchName) {
        this._userResearchName = _userResearchName;
    }

    public String get_researchNumber() {
        return _researchNumber;
    }

    public void set_researchNumber(String _researchNumber) {
        this._researchNumber = _researchNumber;
    }

    public Date get_birthDate() {
        return _birthDate;
    }

    public void set_birthDate(Date _birthDate) {
        this._birthDate = _birthDate;
    }

    public List<String> get_childhoodLanguages() {
        return _childhoodLanguages;
    }

    public void set_childhoodLanguages(List<String> _childhoodLanguages) {
        this._childhoodLanguages = _childhoodLanguages;
    }

    public List<BaseMultimedia> get_userMultimedia() {
        return _userMultimedia;
    }

    public void set_userMultimedia(List<BaseMultimedia> _userMultimedia) {
        this._userMultimedia = _userMultimedia;
    }

    public boolean is_isAdmin() {
        return _isAdmin;
    }

    public void set_isAdmin(boolean _isAdmin) {
        this._isAdmin = _isAdmin;
    }

    
    public boolean is_isResearcher() {
        return _isResearcher;
    }

    public void set_isResearcher(boolean _isResearcher) {
        this._isResearcher = _isResearcher;
    }
    
    public boolean is_isResearchParticipant() {
        return _isResearchParticipant;
    }

    public void set_isResearchParticipant(boolean _isResearchParticipant) {
        this._isResearchParticipant = _isResearchParticipant;
    }
	
	public HashMap getLikes() {
        return likes;
    }

    public void setLikes(HashMap likes) {
        this.likes = likes;
    }
}
