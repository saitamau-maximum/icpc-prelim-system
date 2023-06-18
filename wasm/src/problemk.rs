use rand;
use rand::prelude::*;
use rand_chacha::ChaCha8Rng;

pub fn generate_testcase_k(caseid: u64) -> Vec<i32> {
    let mut rng = ChaCha8Rng::seed_from_u64(caseid);
    let mut ret = Vec::new();
    for _ in 0..10000 {
        ret.push(rng.gen_range(1..10001));
    }
    ret.push(0);
    ret
}

fn modelans_k(testcase: &Vec<i32>) -> i32 {
    let mut ret = 0;
    for x in testcase {
        if *x == 0 {
            break;
        }
        ret = ret.max(*x);
    }
    ret
}

pub fn validate_testcase_k(testid: u64, ans: &str) -> bool {
    let testcase = generate_testcase_k(testid);
    let modelans = modelans_k(&testcase);
    let mut vans = Vec::new();
    for line in ans.lines() {
        vans.push(line.parse::<i32>().unwrap());
    }
    if vans.len() != 1 {
        return false;
    }
    vans[0] == modelans
}
