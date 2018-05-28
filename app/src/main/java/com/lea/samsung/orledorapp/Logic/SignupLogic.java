package com.lea.samsung.orledorapp.Logic;

import com.lea.samsung.orledorapp.Common.UserContext;
import com.lea.samsung.orledorapp.DAL.UserDal;
import com.lea.samsung.orledorapp.Models.User;

import java.util.Date;
import java.util.List;

/**
 * Created by USER on 5/7/2016.
 */
public class SignupLogic {
    public boolean SignUp(String userName,
                          String password,
                          String firstName,
                          String department,
                          String nativeLanguage,
                          String pastEmployment,
                          String hobbies,
                          String q1,
                          String q2,
                          String q3,
                          String q4,
                          String q5,
                          String q5a,
                          String q6,
                          String q6a,
                          String q6b,
                          String q7,
                          List<String> medicalCondition,
                          String medicalCondition_freeText,
                          String userResearchName,
                          String researchNumber,
                          Date birthDate,
                          List<String> childhoodLanguages)
    {
        User newUser = new User();
        newUser.set_userName(userName);
        newUser.set_password(password);
        newUser.set_firstName(firstName);
        newUser.set_department(department);
        newUser.set_nativeLanguage(nativeLanguage);
        newUser.set_pastEmployment(pastEmployment);
        newUser.set_hobbies(hobbies);
        newUser.set_q1(q1);
        newUser.set_q2(q2);
        newUser.set_q3(q3);
        newUser.set_q4(q4);
        newUser.set_q5(q5);
        newUser.set_q5a(q5a);
        newUser.set_q6(q6);
        newUser.set_q6a(q6a);
        newUser.set_q6b(q6b);
        newUser.set_q7(q7);
        newUser.set_medicalCondition(medicalCondition);
        newUser.set_medicalCondition_freeText(medicalCondition_freeText);
        newUser.set_userResearchName(userResearchName);
        newUser.set_researchNumber(researchNumber);
        newUser.set_birthDate(birthDate);
        newUser.set_childhoodLanguages(childhoodLanguages);

        Boolean isAddSucceed = new UserDal().SaveUser(newUser);

        if(isAddSucceed) {
            UserContext.setLoggedUser(newUser);
        }

        return isAddSucceed;
    }
}
