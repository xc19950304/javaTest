package com.xc.test.webService;

import javax.jws.WebService;

@WebService (endpointInterface="com.xc.test.webService.BusinessDataInterface",serviceName="businessDataService")
public class BusinessDataService implements BusinessDataInterface{

	@Override
	public String getWarningInfor() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getWarningHandle() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getEventInfor() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getEventHandle() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getCompomentUpdateInfor() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getSensorUpdateInfor() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getTaskInfor() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getTasksInfor() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getSystemLogInfor() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getSystemOperationRecord() {
		// TODO Auto-generated method stub
		return null;
	}

}
