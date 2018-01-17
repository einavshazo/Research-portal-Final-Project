package com.lea.samsung.orledorapp.Logic;

/*import com.lea.samsung.orledorapp.Common.MediaSortService;
import com.lea.samsung.orledorapp.Common.UserContext;*/
import com.lea.samsung.orledorapp.DAL.Researches;
/*import com.lea.samsung.orledorapp.DAL.UserDal;
import com.lea.samsung.orledorapp.Inerfaces.IRecommendedActivity;
import com.lea.samsung.orledorapp.Inerfaces.IRecommended;
import com.lea.samsung.orledorapp.Inerfaces.IMultimediaAction;
import com.lea.samsung.orledorapp.Models.BaseMultimedia;
import com.lea.samsung.orledorapp.Models.Multimedia;
import com.lea.samsung.orledorapp.Models.MultimediaType;
import com.lea.samsung.orledorapp.Models.User;*/

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
