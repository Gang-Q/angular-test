import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('case 1:输入框1', () => {
    // 期待效果：可输入内容
    // 期待效果：占位符显示为phone number
  });

  it('case 2:输入框2', () => {
    // 期待效果：可输入内容
    // 期待效果：占位符显示为fax number
  });

  it('case 3:输入框3', () => {
    // 期待效果：可输入内容
    // 期待效果：占位符不存在
    // 期待效果：输入的内容实时显示在下方name后的双引号中
  });

  it('case 4:按钮Call', () => {
    // 期待效果：按钮显示Call
    // 期待效果：按钮可按
  });

  it('ase 5:按钮Fax', () => {
    // 期待效果：按钮显示Fax
    // 期待效果：按钮可按
  });

  it('case 6:按钮（禁用）', () => {
    // 期待效果：按钮显示disabled by attribute：true
    // 期待效果：按钮不可按
  });

  it('case 7:按钮Submit', () => {
    // 期待效果：按钮显示Submit
    // 期待效果：按钮可按
    // 期待效果：点击后，下方显示Submitted. Form value is {"name":"こう"}
    //                       JSON: { "name": "こう" }
  });
});
