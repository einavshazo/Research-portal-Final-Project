package com.lea.samsung.orledorapp.Logic;

import com.lea.samsung.orledorapp.Common.ResearchContext;
import com.lea.samsung.orledorapp.DAL.ResearchesDal;
import com.lea.samsung.orledorapp.Models.Researches;

import java.util.Date;
import java.util.List;

/**
 * Created by USER on 17/1/2018.
 */
public class SaveNewResearchesLogic {
    public boolean SaveNewResearche(String researchName,
                          String rearchParticipate,
                          String researchProcess,
                          String researchVariables,
                          List<String> languages,
                          List<String> musicStyle,
                          String countries,
                          Date startDate,
                          Date endDate,
                          List<String> sampleGroup
                          )
    {
        Research newResearch = new Research();
        newResearch.set_researchName(researchName);
        newResearch.set_rearchParticipate(rearchParticipate);
        newResearch.set_researchProcess(researchProcess);
        newResearch.set_ResearchVariables(researchVariables);
        newResearch.set_languages(languages);
        newResearch.set_musicStyle(musicStyle);
        newResearch.set_countries(countries);
        newResearch.set_startDate(startDate);
        newResearch.set_endDate(endDate);
        newResearch.set_sampleGroup(sampleGroup);



        Boolean isAddSucceed = new ResearchesDal().SaveResearch(newResearch);

        if(isAddSucceed) {
            UserContext.setLoggedResearch(newResearch);
        }

        return isAddSucceed;
    }
}
