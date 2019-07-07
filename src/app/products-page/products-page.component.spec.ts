import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import sinon from 'sinon';

import { ProductsPageComponent } from './products-page.component';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { element } from 'protractor';

describe('ProductsPageComponent', () => {
  let component: ProductsPageComponent;
  let fixture: ComponentFixture<ProductsPageComponent>;

  const mockProductService = sinon.createStubInstance(ProductsService);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsPageComponent ],
      providers: [
        { provide: ProductsService, useValue: mockProductService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have a header with the text 'All products'`, () => {
    expect(fixture.debugElement.nativeElement.querySelector('h1').textContent).toEqual('All products');
  });

  it('should render all products', () => {
    const product: Product = new Product("BTS underwear", "Do you want to feel like a Korean popstar?");
    mockProductService.getAllProducts.returns([product]);

    const ourFixture: ComponentFixture<ProductsPageComponent> = TestBed.createComponent(ProductsPageComponent);
    ourFixture.detectChanges();

    const allTitleElements: Array<Element> = Array.from(
      ourFixture.debugElement.nativeElement.querySelectorAll('ul li p.title')
    );
    const allTitles: Array<string> = allTitleElements.map(e => e.textContent);
    expect(allTitles).toContain("BTS underwear");
    expect(allTitles.length).toEqual(1);
  });
});
