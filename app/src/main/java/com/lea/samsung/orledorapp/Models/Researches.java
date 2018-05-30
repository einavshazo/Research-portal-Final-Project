package com.lea.samsung.orledorapp.Models;

//import com.lea.samsung.orledorapp.Inerfaces.IRecommended;

import java.util.Date;
import java.util.List;

/**
 * Created by USER on 17/1/2018.
 */
public class Researches {
    private String _researchName;
    private String _rearchParticipate;
    private String _researchProcess;
    private String _researchVariables;
    private List<String> _language;
    private List<String> _musicStyle;
    private String _countries;
    private String _algorithm;
    private Date _startDate;
    private Date _endDate;
    private List<String> _sampleGroup;
    private boolean _isFirstTime;


    public String get_researchName() {
        return _researchName;
    }

    public void set_researchName(String _researchName) {
        this._researchName = _researchName;
    }

    public String get_rearchParticipate() {
        return _rearchParticipate;
    }

    public void set_rearchParticipate(String _rearchParticipate) {
        this._rearchParticipate = _rearchParticipate;
    }

    public String get_researchProcess() {
        return _researchProcess;
    }

    public void set_researchProcess(String _researchProcess) {
        this._researchProcess = _researchProcess;
    }

    public String get_researchVariables() {
        return _researchVariables;
    }

    public void set_researchVariables(String _researchVariables) {
        this._researchVariables = _researchVariables;
    }

    public List<String> get_language() {
        return _language;
    }

    public void set_language(List<String> _language) {
        this._language = _language;
    }

    public List<String> get_musicStyle() {
        return _musicStyle;
    }

    public void set_musicStyle(List<String> _musicStyle) {
        this._musicStyle = _musicStyle;
    }

    public String get_countries() {
        return _countries;
    }

    public void set_countries(String _countries) {
        this._countries = _countries;
    }

    public String get_algorithm() {
        return _algorithm;
    }

    public void set_algorithm(String _algorithm) {
        this._algorithm = _algorithm;
    }
    public Date get_startDate() {
        return _startDate;
    }

    public void set_startDate(Date _startDate) {
        this._startDate = _startDate;
    }

    public Date get_endDate() {
        return _endDate;
    }

    public void set_endDate(Date _endDate) {
        this._endDate = _endDate;
    }
	
	public void set_sampleGroup(List<String> _sampleGroup) {
        this._sampleGroup = _sampleGroup;
    }

    public List<String> get_sampleGroup() {
        return _sampleGroup;
    }

    public boolean is_isFirstTime() {
        return _isFirstTime;
    }

    public void set_isFirstTime(boolean _isFirstTime) {
        this._isFirstTime = _isFirstTime;
    }
}

