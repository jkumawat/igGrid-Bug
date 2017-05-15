import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  private gridOptions: IgGrid;
  private id: string;
  private data: any;

  constructor() {
    this.addLotsOfProducts();

    this.id = 'grid1';
    //this.newProduct = this.createNewProduct();

    this.gridOptions = {
      autoCommit: true,
      width: "100%",
      height: "100%",
      autoGenerateColumns: false,
      autofitLastColumn: false,
      columns: [
        { key: "ProductID", headerText: "Product ID", width: "50px", dataType: "number" },
        { key: "ProductName", headerText: "Name", width: "250px", dataType: "string" },
        { key: "QuantityPerUnit", headerText: "Quantity per unit", width: "250px", dataType: "string" },
        {
          key: "UnitPrice",
          headerText: "Unit Price",
          width: "100px",
          dataType: "number"
        }, { key: "Published", headerText: "Published", width: "100px", dataType: "bool", hidden: false },

      ],
      primaryKey: "ProductID",
      features: [
        {
          name: "Sorting",
          type: "local"

        },
        {
          name: "Filtering",
          type: "local"
        },
        {
          name: "Paging",
          type: "local",
          pageSize: 5
        }
      ]
    };
  }

  addLotsOfProducts() {
    let products = [];
    for (let _i = 1; _i < 20; _i++) {
      let newProduct = {};
      newProduct["ProductID"] = _i;
      newProduct["ProductName"] = "product " + _i;
      newProduct["QuantityPerUnit"] = "4 kg pkg.";
      newProduct["UnitPrice"] = 34;
      newProduct["Published"] = _i % 2;
      products.push(newProduct);
    }

    this.data = products;
  }
}
