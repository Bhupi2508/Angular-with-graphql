import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { log } from 'util';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any;
  constructor(private apollo: Apollo) { }
  ngOnInit() {
    this.apollo.query({
      query: gql`query getPaymentInstruction {
    paymentInstruction(transactionId: "65559") {
    instructionId
    transactionId
    paymentMethod
    remark
    isAdhocAccFlag
    cbxSupportStatus
    cbxSupportStatusChannelSeqId
    expiryDate
    chargeBearer {
      chargeTypes
      chargeDescription
      __typename
    }
  }
}`
    }).subscribe(({ data, loading }) => {
      console.log("Data =>>>>>>>>", data)
      this.data = data;
    });
  }
}
