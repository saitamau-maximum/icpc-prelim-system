mod problemj;
mod problemk;
mod probleml;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    // pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn generate_testcase(problemid: &str, caseid: i32) -> String {
    assert!(caseid >= 1 && caseid <= 4, "Invalid caseid");

    if problemid == "j" {
        let testcase = problemj::generate_testcase_j(caseid as u64);
        let mut ret = String::new();
        for (x, y) in testcase {
            ret.push_str(&format!("{} {}\n", x, y));
        }
        return ret;
    }
    if problemid == "k" {
        let testcase = problemk::generate_testcase_k(caseid as u64);
        let mut ret = String::new();
        for x in testcase {
            ret.push_str(&format!("{}\n", x));
        }
        return ret;
    }
    if problemid == "l" {
        let testcase = probleml::generate_testcase_l(caseid as u64);
        let mut ret = String::new();
        for (x, y) in testcase {
            ret.push_str(&format!("{} {}\n", x, y));
        }
        return ret;
    }

    // TODO: Implement
    String::from("Not implemented")
}

#[wasm_bindgen]
pub fn validate_testcase(problemid: &str, caseid: i32, ans: &str) -> bool {
    assert!(caseid >= 1 && caseid <= 4, "Invalid caseid");

    if problemid == "j" {
        return problemj::validate_testcase_j(caseid as u64, ans);
    }
    if problemid == "k" {
        return problemk::validate_testcase_k(caseid as u64, ans);
    }
    if problemid == "l" {
        return probleml::validate_testcase_l(caseid as u64, ans);
    }
    // TODO: Implement
    true
}
