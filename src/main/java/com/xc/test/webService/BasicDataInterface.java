package com.xc.test.webService;

import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService 
public interface BasicDataInterface {
	@WebMethod 
	String getCompomentInfor();
	
	@WebMethod
	String getMutiCompomentInfor();
	
	@WebMethod
	String getSensorInfor();
	
	@WebMethod
	String getMutiSensorInfor();
	
	@WebMethod
	String getRFIDInfor();
	
	@WebMethod
	String getMutiRFIDInfor();
	
	@WebMethod
	String getSensingHeadInfor();
	
	@WebMethod
	String getMutiSensingHeadInfor();


}
