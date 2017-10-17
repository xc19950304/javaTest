package com.xc.test.webService;

import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService 
public interface BusinessDataInterface {
	
	@WebMethod
	String getWarningInfor();
	
	@WebMethod
	String getWarningHandle();
	
	@WebMethod
	String getEventInfor();
	
	@WebMethod
	String getEventHandle();
	
	@WebMethod
	String getCompomentUpdateInfor();
	
	@WebMethod
	String getSensorUpdateInfor();
	
	@WebMethod
	String getTaskInfor();
	
	@WebMethod
	String getTasksInfor();
	
	@WebMethod
	String getSystemLogInfor();
	
	@WebMethod
	String getSystemOperationRecord();

}
