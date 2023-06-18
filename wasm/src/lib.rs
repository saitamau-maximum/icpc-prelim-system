mod problemj;
mod problemk;
mod probleml;
mod problemm;

use core::panic;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn generate_testcase(problemid: &str, caseid: i32) -> String {
    assert!(caseid >= 1 && caseid <= 4, "Invalid caseid");

    if problemid == "j" {
        let testcase = problemj::generate(caseid as u64);
        let mut ret = String::new();
        for (x, y) in testcase {
            ret.push_str(&format!("{} {}\n", x, y));
        }
        return ret;
    }
    if problemid == "k" {
        let testcase = problemk::generate(caseid as u64);
        let mut ret = String::new();
        for x in testcase {
            ret.push_str(&format!("{}\n", x));
        }
        return ret;
    }
    if problemid == "l" {
        let testcase = probleml::generate(caseid as u64);
        let mut ret = String::new();
        for (x, y) in testcase {
            ret.push_str(&format!("{} {}\n", x, y));
        }
        return ret;
    }
    if problemid == "m" {
        let testcase = problemm::generate(caseid as u64);
        let mut ret = String::new();
        for (a, b, c, d) in testcase {
            ret.push_str(&format!("{} {} {} {}\n", a, b, c, d));
        }
        return ret;
    }

    panic!("Invalid problemid");
}

#[wasm_bindgen]
pub fn validate_testcase(problemid: &str, caseid: i32, ans: &str) -> bool {
    assert!(caseid >= 1 && caseid <= 4, "Invalid caseid");

    if problemid == "j" {
        return problemj::validate(caseid as u64, ans);
    }
    if problemid == "k" {
        return problemk::validate(caseid as u64, ans);
    }
    if problemid == "l" {
        return probleml::validate(caseid as u64, ans);
    }
    if problemid == "m" {
        return problemm::validate(caseid as u64, ans);
    }

    panic!("Invalid problemid");
}
