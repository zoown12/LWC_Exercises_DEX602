# Execute in Mac using: ./EXFiles/scripts/CreateOrg.sh
echo "*** Creating scratch Org..."
sfdx force:org:create -f config/project-scratch-def.json --setdefaultusername --setalias soDEX602_1 -d 30
echo "*** Opening scratch Org..."
sfdx force:org:open
echo "*** Pushing metadata to scratch Org..."
sfdx force:source:push
echo "*** Assigning permission set to your user..."
sfdx force:user:permset:assign --permsetname Certification
echo "*** Creating required users..."
sfdx force:apex:execute -f EXFiles/data/CreateUsers.txt
echo "*** Creating data"
# sfdx ETCopyData:import -c EXFiles/data --loglevel warn
sfdx force:apex:execute -f EXFiles/data/DeleteAndLoadData.txt

# $./EXFiles/scripts/CreateOrg.sh  --> org 한번에 생성

#sfdx force:user:password:generate --> 모바일 임시 비밀번호 및 아이디 생성