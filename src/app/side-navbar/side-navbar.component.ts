import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  sidebarItems = [
    {id:"catalog",name:"Catalog",subMenu:[
      {name:"Products",link:['/admin/product']},
      {name:"Categories",link:['#']},
      {name:"Manufacturers",link:['#']},
      {name:"Product Detail",link:['/admin/product-detail']},
      {name:"Product tags",link:['#']},
    ]},
    {id:"sales",name:"Sales",subMenu:[
      {name:"Orders",link:['#']},
      {name:"Shipments",link:['#']},
      {name:"Return ",link:['#']},
      {name:"Recurring payments",link:['#']},
      {name:"Gift cards",link:['#']},
      {name:"Shopping carts and wishlists",link:['#']},
      
    ]},
    {id:"customers",name:"Customers",subMenu:[
      {name:"Customers",link:['#']},
      {name:"Customer roles",link:['#']},
      {name:"Online customers",link:['#']},
      {name:"Vendors",link:['#']},
      {name:"Activity log",link:['#']},
      {name:"Activity Types",link:['#']},
      {name:"GDPR requests",link:['#']},
    ]},
    {id:"promotions",name:"Promotions",subMenu:[
      {name:"Discounts",link:['#']},
      {name:"Affiliates",link:['#']},
      {name:"Newsletter subscribers",link:['#']},
      {name:"Campaigns",link:['#']},
    ]},
    {id:"contManage",name:"Conten management",subMenu:[
      {name:"Topics",link:['#']},
      {name:"Message templates",link:['#']},
      {name:"News items",link:['#']},
      {name:"News comments",link:['#']},
      {name:"Blog posts",link:['#']},
      {name:"Blog comments",link:['#']},
      {name:"Polls",link:['#']},
      {name:"Forums",link:['#']},

    ]},
    {id:"conf",name:"Configuration",subMenu:[

    ]},
    {id:"system",name:"System",subMenu:[
      {name:"System information",link:['#']},
      {name:"Log",link:['#']},
      {name:"Warnings",link:['#']},
      {name:"Maintenance",link:['#']},

    ]},
    {id:"report",name:"Report",subMenu:[
      {name:"Sales summary",link:['#']},
      {name:"Low stock",link:['#']},
      {name:"Bestsellers",link:['#']},
      {name:"Country sales",link:['#']},

    ]},
    {id:"help",name:"Help",subMenu:[
      {name:"Help topics",link:['#']},
      {name:"Community Forums",link:['#']},
    ]},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
