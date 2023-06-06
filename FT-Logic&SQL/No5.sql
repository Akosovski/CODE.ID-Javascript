create table T_POLICY (
    POLICY_NUMBER integer,
    POLICY_SUBMIT_DATE date,
    PREMIUM money,
	DISCOUNT integer,
	COMMISSION money,
	CLIENT_NUMBER varchar(15),
	AGENT_CODE varchar(15),
	POLICY_STATUS varchar(15),
	POLICY_DUE_DATE date
);

create table T_AGENT (
	AGENT_CODE varchar(15),
	AGENT_NAME varchar(15),
	AGENT_OFFICE varchar(15),
	BASIC_COMMISSION integer
);

create table T_CLIENT (
	CLIENT_NUMBER varchar(15),
	CLIENT_NAME varchar(15),
	BIRTH_DATE date
);

alter table T_AGENT add constraint PK_AGENT_CODE primary key (AGENT_CODE);
alter table T_CLIENT add constraint PK_CLIENT_NUMBER primary key (CLIENT_NUMBER);

alter table T_POLICY add constraint FK_CLIENT_NUMBER foreign key (CLIENT_NUMBER) references
T_CLIENT(CLIENT_NUMBER) ON DELETE CASCADE ON UPDATE CASCADE;
alter table T_POLICY add constraint FK_AGENT_CODE foreign key (AGENT_CODE) references
T_AGENT(AGENT_CODE) ON DELETE CASCADE ON UPDATE CASCADE;

insert into T_AGENT (AGENT_CODE, AGENT_NAME, AGENT_OFFICE) values
('AG001', 'LIDYA', 'JAKARTA'),
('AG002', 'RUDI', 'BALI'),
('AG003', 'DICKY', 'BALI');

insert into T_CLIENT (CLIENT_NUMBER, CLIENT_NAME, BIRTH_DATE) values
('CL001', 'WAYNE ROONEY', '1956-5-11'),
('CL002', 'RYAN GIGGS', '1972-9-3'),
('CL003', 'DAVID BECKHAM', '1985-9-3'),
('CL004', 'MICHAEL OWEN', '2012-9-3');

insert into T_POLICY (POLICY_NUMBER, POLICY_SUBMIT_DATE, PREMIUM, DISCOUNT, COMMISSION, CLIENT_NUMBER, AGENT_CODE, POLICY_STATUS) values
(001, '2018-1-5', 18600000, 10, 930000, 'CL001', 'AG001', 'INFORCE'),
(002, '2018-1-5', 2500000, 10, 125000, 'CL002', 'AG002', 'INFORCE'),
(003, '2018-1-10', 2500000, 10, 125000, 'CL003', 'AG003', 'TERMINATE'),
(004, '2018-1-25', 4000000, 10, 200000, 'CL003', 'AG002', 'PROPOSAL'),
(005, '2018-1-25', 2625000, 10, 131250, 'CL004', 'AG002', 'PROPOSAL');

drop table T_POLICY, T_AGENT, T_CLIENT;

-- Bagian A

select * FROM T_POLICY right join T_CLIENT on T_POLICY.CLIENT_NUMBER = T_CLIENT.CLIENT_NUMBER
where T_POLICY.POLICY_SUBMIT_DATE > '2018-1-15' and TO_CHAR(T_CLIENT.BIRTH_DATE, 'Month') = 'September';

-- Bagian B

select * from T_POLICY right join T_AGENT on T_POLICY.AGENT_CODE = T_AGENT.AGENT_CODE 
where T_AGENT.AGENT_OFFICE = 'JAKARTA' and T_POLICY.POLICY_STATUS = 'INFORCE';

-- Bagian C

update T_AGENT
set BASIC_COMMISSION = T_POLICY.COMMISSION / T_POLICY.PREMIUM * 100
from T_POLICY;

-- Bagian D

update T_POLICY
set POLICY_DUE_DATE = date_trunc('month', T_POLICY.POLICY_SUBMIT_DATE) + interval '1 month' + interval '1 month' - interval '1 day'
from (
	select POLICY_NUMBER from T_POLICY
	group by POLICY_NUMBER
) as subquery
where T_POLICY.POLICY_NUMBER = subquery.POLICY_NUMBER;

-- Bagian E

select * 
from (
	select T_POLICY.PREMIUM - T_POLICY.PREMIUM * T_POLICY.DISCOUNT / 100 h from T_POLICY
	where round(T_POLICY.PREMIUM::numeric::integer) < 1000000 order by T_POLICY.PREMIUM
) as subquery;