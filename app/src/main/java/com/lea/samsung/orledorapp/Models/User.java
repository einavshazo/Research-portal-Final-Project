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
    private String _userResearchName;
    private String _researchNumber;
    private Date _birthDate;
    private List<String> _language;
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

    public List<String> get_language() {
        return _language;
    }

    public void set_language(List<String> _language) {
        this._language = _language;
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
