import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
 @ViewChild("chart") chart: ChartComponent;
  public chartOptions: {};
  public zhviChart: {};
  public mlp: {};
  public msp: {};
  public fourbed: {};
  message: string;
  region = "Los Angeles";
  education = 2;
	response: any;
	res: any;
	url: any;
 constructor(private http: HttpClient){
 /*	this.printToConsole("Got the service!");*/
    
  
 }
 ngOnInit(){
	this.crimerates();
	this.zhvi();
	this.MLP();
	this.MSP();
	this.FourBed();
	this.schoolRanking();
 }

crimerates(){
 		this.http.get('https://api.sheety.co/e70d68b5f3906c470861523124d80bf2/douceVilla/sheet1')
 	.subscribe((response) => {
 		this.response = response; 
 /*		console.log(this.response[0].region);*/
 		this.url= "http://localhost:1337/shippingScorecard/CrimeRate?region=" +this.region;
 		this.http.get(this.url)
 		.subscribe((res) => {
 			this.res = res;
 			console.log(this.res);
 			this.chartOptions = {
      series: [
       {
          name: "Property Crime Rate",
          data: [parseFloat(this.res[0].PCR),
           parseFloat(this.res[1].PCR),
            parseFloat(this.res[2].PCR),
             parseFloat(this.res[3].PCR), 
             parseFloat(this.res[4].PCR),
             parseFloat(this.res[5].PCR), 
             parseFloat(this.res[6].PCR),
              parseFloat(this.res[7].PCR),
              parseFloat(this.res[8].PCR), 
              parseFloat(this.res[9].PCR), 
              parseFloat(this.res[10].PCR)]        },

              {name: "Violent Crime Rate",
          data: [parseFloat(this.res[0]._VCR),
           parseFloat(this.res[1]._VCR),
            parseFloat(this.res[2]._VCR),
             parseFloat(this.res[3]._VCR), 
             parseFloat(this.res[4]._VCR),
             parseFloat(this.res[5]._VCR), 
             parseFloat(this.res[6]._VCR),
              parseFloat(this.res[7]._VCR),
              parseFloat(this.res[8]._VCR), 
              parseFloat(this.res[9]._VCR), 
              parseFloat(this.res[10]._VCR)]},

              {name: "Burglary Rate",
          data: [parseFloat(this.res[0].BR),
           parseFloat(this.res[1].BR),
            parseFloat(this.res[2].BR),
             parseFloat(this.res[3].BR), 
             parseFloat(this.res[4].BR),
             parseFloat(this.res[5].BR), 
             parseFloat(this.res[6].BR),
              parseFloat(this.res[7].BR),
              parseFloat(this.res[8].BR), 
              parseFloat(this.res[9].BR), 
              parseFloat(this.res[10].BR)]}

           ],

      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Crime Rate",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [this.res[0].year, this.res[1].year, this.res[2].year, this.res[3].year, this.res[4].year,this.res[5].year, this.res[6].year, this.res[7].year, this.res[8].year, this.res[9].year, this.res[10].year]
      }
    };
 		})

 	}) 
 	
 	
 }
  zhvi(){
 		this.http.get('https://api.sheety.co/e70d68b5f3906c470861523124d80bf2/douceVilla/sheet1')
 	.subscribe((response) => {
 		this.response = response; 
 	/*	console.log(this.response[0].region);*/
 		this.url= "http://localhost:1337/shippingScorecard/ZhviPrice?region=" +this.region;
 		this.http.get(this.url)
 		.subscribe((res) => {
 			this.res = res;
 			console.log(this.res);
 			this.zhviChart = {
      series: [
   
                    {
          name: "House Value Estimate in this Region",
          data: [parseInt(this.res[0].price),
           parseInt(this.res[1].price),
            parseInt(this.res[2].price),
             parseInt(this.res[3].price), 
             parseInt(this.res[4].price),
             parseInt(this.res[5].price), 
             parseInt(this.res[6].price),
              parseInt(this.res[7].price),
              parseInt(this.res[8].price), 
              parseInt(this.res[9].price), 
              parseInt(this.res[10].price)]        }


      ],

      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "House Value In Your Region",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [this.res[0].date, this.res[1].date, this.res[2].date, this.res[3].date, this.res[4].date,this.res[5].date, this.res[6].date, this.res[7].date, this.res[8].date, this.res[9].date, this.res[10].date]
      }
    };
 		})

 	}) 
 	
 	
 }

MLP(){
 		this.http.get('https://api.sheety.co/e70d68b5f3906c470861523124d80bf2/douceVilla/sheet1')
 	.subscribe((response) => {
 		this.response = response; 
/* 		console.log(this.response[0].region);*/
 		this.url= "http://localhost:1337/shippingScorecard/MLP?region=" +this.region;
 		this.http.get(this.url)
 		.subscribe((res) => {
 			this.res = res;
 			console.log(this.res);
 			this.mlp = {
      series: [
   
                    {
          name: "House Value Estimate in this Region",
          data: [parseInt(this.res[0].mlp),
           parseInt(this.res[1].mlp),
            parseInt(this.res[2].mlp),
             parseInt(this.res[3].mlp), 
             parseInt(this.res[4].mlp),
             parseInt(this.res[5].mlp), 
             parseInt(this.res[6].mlp),
              parseInt(this.res[7].mlp),
              parseInt(this.res[8].mlp), 
              parseInt(this.res[9].mlp), 
              parseInt(this.res[10].mlp)]        }


      ],

      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Median List Price",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [this.res[0].date, this.res[1].date, this.res[2].date, this.res[3].date, this.res[4].date,this.res[5].date, this.res[6].date, this.res[7].date, this.res[8].date, this.res[9].date, this.res[10].date]
      }
    };
 		})

 	}) 
 	
 	
 }

MSP(){
 		this.http.get('https://api.sheety.co/e70d68b5f3906c470861523124d80bf2/douceVilla/sheet1')
 	.subscribe((response) => {
 		this.response = response; 
 /*		console.log(this.response[0].region);*/
 		this.url= "http://localhost:1337/shippingScorecard/MSP?region=" +this.region;
 		this.http.get(this.url)
 		.subscribe((res) => {
 			this.res = res;
 			console.log(this.res);
 			this.msp = {
      series: [
   
                    {
          name: "House Value Estimate in this Region",
          data: [parseInt(this.res[0].price),
           parseInt(this.res[1].price),
            parseInt(this.res[2].price),
             parseInt(this.res[3].price), 
             parseInt(this.res[4].price),
             parseInt(this.res[5].price), 
             parseInt(this.res[6].price),
              parseInt(this.res[7].price),
              parseInt(this.res[8].price), 
              parseInt(this.res[9].price), 
              parseInt(this.res[10].price)]        }


      ],

      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Median Sale Price",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [this.res[0].date, this.res[1].date, this.res[2].date, this.res[3].date, this.res[4].date,this.res[5].date, this.res[6].date, this.res[7].date, this.res[8].date, this.res[9].date, this.res[10].date]
      }
    };
 		})

 	}) 
 	
 	
 }

FourBed(){
 		this.http.get('https://api.sheety.co/e70d68b5f3906c470861523124d80bf2/douceVilla/sheet1')
 	.subscribe((response) => {
 		this.response = response; 
 	/*	console.log(this.response[0].region);*/
 		this.url= "http://localhost:1337/shippingScorecard/FourBed?region=" +this.region;
 		this.http.get(this.url)
 		.subscribe((res) => {
 			this.res = res;
 			console.log(this.res);
 			this.fourbed = {
      series: [
   
                    {
          name: "Four Bedroom Pricing",
          data: [parseInt(this.res[0].price),
           parseInt(this.res[1].price),
            parseInt(this.res[2].price),
             parseInt(this.res[3].price), 
             parseInt(this.res[4].price),
             parseInt(this.res[5].price), 
             parseInt(this.res[6].price),
              parseInt(this.res[7].price),
              parseInt(this.res[8].price), 
              parseInt(this.res[9].price), 
              parseInt(this.res[10].price)]        }


      ],

      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Four Bedroom Pricing",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [this.res[0].date, this.res[1].date, this.res[2].date, this.res[3].date, this.res[4].date,this.res[5].date, this.res[6].date, this.res[7].date, this.res[8].date, this.res[9].date, this.res[10].date]
      }
    };
 		})

 	}) 
 	
 	
 }
schoolRanking(){
this.http.get('https://api.sheety.co/e70d68b5f3906c470861523124d80bf2/douceVilla/sheet1')
 	.subscribe((response) => {
 		this.response = response; 
 		/*console.log(this.response[0].region);*/
 		this.url= "https://api.schooldigger.com/v1.2/rankings/districts/CA?appID=f56fa12b&appKey=82fe56273c5abee7b11a56e1dce3ce00" ;
 		this.http.get(this.url)
 		.subscribe((res) => {
 			this.res = res;
 			for(var i =0; i<this.res.districtList.length; i++){
 			console.log(this.res.districtList[i].address.city);
 			if(this.region===this.res.districtList[i].address.city){
 					if(this.education<3){
 							this.message = "The schools here are amazing! Unfortunately, this doesn't align with your priority for education."

 			}
 			else if(this.education>=3){
 							this.message = "The schools here are amazing! This matches perfectly with your priority for education."

 			}

 					}
 					else{
 						if(this.education>=3){
 							this.message = "The schools here are average. Unfortunately, this doesn't align with your priority for education."

 			}
 			else if(this.education<3){
 							this.message = "The schools here are average. This aligns well with your priority for education."

 			}
 					}
 		}
 		})
 	})
 }

}

