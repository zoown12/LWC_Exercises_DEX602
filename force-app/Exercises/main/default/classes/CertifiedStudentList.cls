public with sharing class CertifiedStudentList {
    @AuraENabled(cacheable=true)
    public static List<Certification_Held__c> getCertifiedStudents(Id certificationId){

        return[
            SELECT Id,
            Certified_Professional__r.Name,
            Certification__r.Name,
            Certified_Professional__r.Id,
            Certified_Professional__r.Email,
            Certified_Professional__r.Phone,
            Certified_Professional__r.Description,
            Date_Achieved__c
            FROM Certification_Held__c
            WHERE Certification__r.Id =:certificationId
            WITH SECURITY_ENFORCED
            ORDER BY Certified_Professional__r.Name
        ]; // certifiedStudent.js go here
    }

    @AuraEnabled
    public static void deleteStudentCertification(List<String> certificationIds){
        delete[SELECT id FROM Certification_Held__c WHERE Id IN: certificationIds];
    }
}