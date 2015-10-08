'use strict';

/**
 * @ngdoc directive
 * @name bebCrmApp.directive:TelephonePrefix
 * @description
 * # TelephonePrefix
 */
angular.module('bebCrmApp')
  .directive('prefix', function () {
    return {
      template: '<div> <p>{{country}}</p>' +
                      '<p>{{nation}}</p> ' +
                      '<p>Prefisso: {{prefix}}</p>' +
                '</div>',
      scope:{
        country:'='
      },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        var isocode;
        function update (){

          scope.prefix = 'N/A';
          scope.nation = 'N/A';

          data.forEach( function(val){

            if(val.iso==isocode){
              scope.prefix = val.prefix;
              scope.nation= val.name;
            }

          });
        };

        scope.$watch('country', function(value) {
          isocode = value;
          update();

        });

          var data=[{name:'Afghanistan',iso:'AF',prefix:'+93'},
            {name:'Albania',iso:'AL',prefix:'+355'},
            {name:'Algeria',iso:'DZ',prefix:'+213'},
            {name:'Antarctica',iso:'AQ',prefix:'+672'},
            {name:'Argentina',iso:'AR',prefix:'+54'},
            {name:'Aruba',iso:'AW',prefix:'+297'},
            {name:'Austria',iso:'AT',prefix:'+43'},
            {name:'Azerbaijan',iso:'AZ',prefix:'+994'},
            {name:'Bahrain',iso:'BH',prefix:'+973'},
            {name:'Bangladesh',iso:'BD',prefix:'+880'},
            {name:'Belarus',iso:'BY',prefix:'+375'},
            {name:'Belgium',iso:'BE',prefix:'+32'},
            {name:'Belize',iso:'BZ',prefix:'+501'},
            {name:'Benin',iso:'BJ',prefix:'+229'},
            {name:'Bhutan',iso:'BT',prefix:'+975'},
            {name:'Brunei Darussalam',iso:'BN',prefix:'+673'},
            {name:'Bulgaria',iso:'BG',prefix:'+359'},
            {name:'Burundi',iso:'BI',prefix:'+257'},
            {name:'Cambodia',iso:'KH',prefix:'+855'},
            {name:'Cameroon',iso:'CM',prefix:'+237'},
            {name:'Canada',iso:'CA',prefix:'+1'},
            {name:'Central African Republic',iso:'CF',prefix:'+236'},
            {name:'Christmas Island',iso:'CX',prefix:'+61-8'},
            {name:'Comoros',iso:'KM',prefix:'+269'},
            {name:'Congo',iso:'CG',prefix:'+242'},
            {name:'Cook Islands',iso:'CK',prefix:'+682'},
            {name:'Costa Rica',iso:'CR',prefix:'+506'},
            {name:'Croatia',iso:'HR',prefix:'+385'},
            {name:'Cuba',iso:'CU',prefix:'+53'},
            {name:'Cyprus',iso:'CY',prefix:'+357'},
            {name:'Czech Republic',iso:'CZ',prefix:'+420'},
            {name:'Denmark',iso:'DK',prefix:'+45'},
            {name:'Djibouti',iso:'DJ',prefix:'+253'},
            {name:'Egypt',iso:'EG',prefix:'+20'},
            {name:'El Salvador',iso:'SV',prefix:'+503'},
            {name:'Equatorial Guinea',iso:'GQ',prefix:'+240'},
            {name:'Eritrea',iso:'ER',prefix:'+291'},
            {name:'Estonia',iso:'EE',prefix:'+372'},
            {name:'Ethiopia',iso:'ET',prefix:'+251'},
            {name:'Falkland Islands (Malvinas)',iso:'FK',prefix:'+500'},
            {name:'Faroe Islands',iso:'FO',prefix:'+298'},
            {name:'Finland',iso:'FI',prefix:'+358'},
            {name:'France',iso:'FR',prefix:'+33'},
            {name:'French Guiana',iso:'GF',prefix:'+594'},
            {name:'French Polynesia',iso:'PF',prefix:'+689'},
            {name:'Gambia',iso:'GM',prefix:'+220'},
            {name:'Georgia',iso:'GE',prefix:'+995'},
            {name:'Germany',iso:'DE',prefix:'+49'},
            {name:'Guadeloupe',iso:'GP',prefix:'+590'},
            {name:'Guinea',iso:'GN',prefix:'+224'},
            {name:'Guyana',iso:'GY',prefix:'+592'},
            {name:'Honduras',iso:'HN',prefix:'+504'},
            {name:'Hong Kong',iso:'HK',prefix:'+852'},
            {name:'Iceland',iso:'IS',prefix:'+354'},
            {name:'India',iso:'IN',prefix:'+91'},
            {name:'Indonesia',iso:'ID',prefix:'+62'},
            {name:'Iraq',iso:'IQ',prefix:'+964'},
            {name:'Ireland',iso:'IE',prefix:'+353'},
            {name:'Jordan',iso:'JO',prefix:'+962'},
            {name:'Kazakhstan',iso:'KZ',prefix:'+7'},
            {name:'Kenya',iso:'KE',prefix:'+254'},
            {name:'Lebanon',iso:'LB',prefix:'+961'},
            {name:'Lesotho',iso:'LS',prefix:'+266'},
            {name:'Liberia',iso:'LR',prefix:'+231'},
            {name:'Libya',iso:'LY',prefix:'+218'},
            {name:'Liechtenstein',iso:'LI',prefix:'+423'},
            {name:'Luxembourg',iso:'LU',prefix:'+352'},
            {name:'Macao',iso:'MO',prefix:'+853'},
            {name:'Madagascar',iso:'MG',prefix:'+261'},
            {name:'Malaysia',iso:'MY',prefix:'+60'},
            {name:'Maldives',iso:'MV',prefix:'+960'},
            {name:'Malta',iso:'MT',prefix:'+356'},
            {name:'Marshall Islands',iso:'MH',prefix:'+692'},
            {name:'Martinique',iso:'MQ',prefix:'+596'},
            {name:'Mauritania',iso:'MR',prefix:'+222'},
            {name:'Mauritius',iso:'MU',prefix:'+230'},
            {name:'Mexico',iso:'MX',prefix:'+52'},
            {name:'Monaco',iso:'MC',prefix:'+377'},
            {name:'Montenegro',iso:'ME',prefix:'+382'},
            {name:'Morocco',iso:'MA',prefix:'+212'},
            {name:'Mozambique',iso:'MZ',prefix:'+258'},
            {name:'Myanmar',iso:'MM',prefix:'+95'},
            {name:'Namibia',iso:'NA',prefix:'+264'},
            {name:'Nauru',iso:'NR',prefix:'+674'},
            {name:'Netherlands',iso:'NL',prefix:'+31'},
            {name:'New Caledonia',iso:'NC',prefix:'+687'},
            {name:'New Zealand',iso:'NZ',prefix:'+64'},
            {name:'Nicaragua',iso:'NI',prefix:'+505'},
            {name:'Niger',iso:'NE',prefix:'+227'},
            {name:'Nigeria',iso:'NG',prefix:'+234'},
            {name:'Niue',iso:'NU',prefix:'+683'},
            {name:'Norfolk Island',iso:'NF',prefix:'+672'},
            {name:'Oman',iso:'OM',prefix:'+968'},
            {name:'Pakistan',iso:'PK',prefix:'+92'},
            {name:'Palau',iso:'PW',prefix:'+680'},
            {name:'Panama',iso:'PA',prefix:'+507'},
            {name:'Papua New Guinea',iso:'PG',prefix:'+675'},
            {name:'Paraguay',iso:'PY',prefix:'+595'},
            {name:'Peru',iso:'PE',prefix:'+51'},
            {name:'Philippines',iso:'PH',prefix:'+63'},
            {name:'Poland',iso:'PL',prefix:'+48'},
            {name:'Portugal',iso:'PT',prefix:'+351'},
            {name:'Qatar',iso:'QA',prefix:'+974'},
            {name:'Romania',iso:'RO',prefix:'+40'},
            {name:'Samoa',iso:'WS',prefix:'+685'},
            {name:'San Marino',iso:'SM',prefix:'+378'},
            {name:'Saudi Arabia',iso:'SA',prefix:'+966'},
            {name:'Serbia',iso:'RS',prefix:'+381'},
            {name:'Sierra Leone',iso:'SL',prefix:'+232'},
            {name:'Singapore',iso:'SG',prefix:'+65'},
            {name:'Solomon Islands',iso:'SB',prefix:'+677'},
            {name:'South Africa',iso:'ZA',prefix:'+27'},
            {name:'Spain',iso:'ES',prefix:'+34'},
            {name:'Sri Lanka',iso:'LK',prefix:'+94'},
            {name:'Sudan',iso:'SD',prefix:'+249'},
            {name:'Swaziland',iso:'SZ',prefix:'+268'},
            {name:'Sweden',iso:'SE',prefix:'+46'},
            {name:'Switzerland',iso:'CH',prefix:'+41'},
            {name:'Tajikistan',iso:'TJ',prefix:'+992'},
            {name:'Thailand',iso:'TH',prefix:'+66'},
            {name:'Tokelau',iso:'TK',prefix:'+690'},
            {name:'Tunisia',iso:'TN',prefix:'+216'},
            {name:'Turkey',iso:'TR',prefix:'+90'},
            {name:'Tuvalu',iso:'TV',prefix:'+688'},
            {name:'Uganda',iso:'UG',prefix:'+256'},
            {name:'Ukraine',iso:'UA',prefix:'+380'},
            {name:'United Kingdom',iso:'GB',prefix:'+44'},
            {name:'United Arab Emirates',iso:'AE',prefix:'+971'},
            {name:'United States of America',iso:'US',prefix:'+1'},
            {name:'Uruguay',iso:'UY',prefix:'+598'},
            {name:'Uzbekistan',iso:'UZ',prefix:'+998'},
            {name:'Vanuatu',iso:'VU',prefix:'+678'},
            {name:'Yemen',iso:'YE',prefix:'+967'}];



      }
    };
  });
