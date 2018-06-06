package com.lea.samsung.orledorapp.Logic;


import com.lea.samsung.orledorapp.DAL.Researches;


import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * Created by USER on 17/1/2018.
 */
public class ResearchesLogic implements IResearchesAction {


    public ResearchesLogic() {

    }

    public void LoadAllResearches()  {
        new Researches().GetAllResearches(this);
    }

    public void LoadSpecificResearch(ResearchesName name) {
        new Researches().GetAllResearches(this, name);
    }

}
