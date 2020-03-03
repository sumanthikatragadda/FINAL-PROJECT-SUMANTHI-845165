import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { ItemService } from 'src/app/Services/item.service';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {
  additemsform:FormGroup;
  submitted=false;
  clist:Category[];
  sblist:SubCategory[];
  list1:Items[];
  item:Items;
  cid:any;
  sub:SubCategory;
  constructor(private formbuilder:FormBuilder,private service:ItemService) {
   this.sub=new SubCategory();
    this.service.GetAllCategories().subscribe(res=>{
      this.clist=res;
      console.log(this.clist);
    })
   }

  ngOnInit() {
      this.additemsform=this.formbuilder.group({
      id:['',Validators.required],
      itemname:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required],
      stocknumber:['',Validators.required],
      remarks:['',Validators.required],
      categoryid:['',Validators.required],
      subcategoryid:['',Validators.required],
    })
  }
  get f(){return this.additemsform.controls;}
  onSubmit()
  {
    this.submitted= true;
    this.Add();
    //display form value on success
    if(this.additemsform.valid)
    {
      alert("Success")
      console.log(JSON.stringify(this.additemsform.value));
      
    }

  }
  onReset() {
    this.submitted = false;
    this.additemsform.reset();
  }
  Add()
  {
     this.item=new Items();
     this.item.id=Math.round(Math.random()*100);
     this.item.itemname=this.additemsform.value["itemname"];
     this.item.price=this.additemsform.value["price"];
     this.item.description=this.additemsform.value["description"];
     this.item.remarks=this.additemsform.value["remarks"];
     this.item.stocknumber=this.additemsform.value["stocknumber"];
     this.item.categoryid=Number(this.additemsform.value["categoryid"]);
     this.item.subcategoryid=Number(this.additemsform.value["subcategoryid"]);
     this.service.AddItems(this.item).subscribe(res=>{
       console.log('Record Added')
     },err=>{
       console.log(err)
     })
  }
  GetSubCategory()
  {
    let cid=this.additemsform.value["categoryid"];
    console.log(cid);
    this.service.GetAllSubCategories(cid).subscribe(res=>{
      this.sblist=res;
      console.log(this.sblist);
    })
  }

}
